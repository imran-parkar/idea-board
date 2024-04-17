import { useRef, useEffect } from 'react';
import styles from './IdeaTile.module.css';
import dayjs from 'dayjs';
import { Idea } from '../../types/index.ts';
import { useForm } from 'react-hook-form';

export type IdeaTileProps = {
  idea: Idea;
  deleteIdea: (id: string) => void;
  updateIdea: (idea: Idea) => void;
};

type IdeaFormInputs = {
  title: string;
  description: string;
};

export default function IdeaTile({
  idea,
  deleteIdea,
  updateIdea,
}: IdeaTileProps) {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<IdeaFormInputs>({
    mode: 'onBlur',
  });

  const titleInputRef = useRef<HTMLInputElement>(null);
  const { ref, ...rest } = register('title');

  useEffect(() => {
    setFocus('title');
    if (titleInputRef.current?.scrollIntoView) {
      titleInputRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [setFocus]);

  function onSubmit(data: IdeaFormInputs) {
    if (
      (!errors.title || !errors.description) &&
      (data.title !== idea.title || data.description !== idea.description)
    ) {
      const updatedIdea = {
        ...idea,
        title: data.title,
        description: data.description,
        lastUpdated: new Date().toISOString(),
      };
      updateIdea(updatedIdea);
    }
  }

  return (
    <form
      className={styles.IdeaTile}
      onSubmit={handleSubmit(onSubmit)}
      role='form'
    >
      <label htmlFor='title' className='sr-only'>
        Title
      </label>
      <input
        type='text'
        placeholder='Title'
        id='title'
        defaultValue={idea.title}
        {...register('title', {
          required: true,
          onBlur: (e) => {
            if (!errors.title) {
              handleSubmit(onSubmit)(e);
            }
          },
        })}
        {...rest}
        ref={(e) => {
          ref(e);
          // @ts-expect-error: Code provided by react-hook-form
          titleInputRef.current = e;
        }}
      />
      {errors.title?.type === 'required' && (
        <p role='alert' className={styles.formError}>
          Title is required
        </p>
      )}
      <label htmlFor='description' className='sr-only'>
        Description
      </label>
      <textarea
        id='description'
        placeholder='Description'
        defaultValue={idea.description}
        {...register('description', {
          onBlur: (e) => {
            if (!errors.description) {
              handleSubmit(onSubmit)(e);
            }
          },
          maxLength: {
            value: 140,
            message: 'Maximum 140 characters',
          },
        })}
      ></textarea>
      {errors.description && (
        <p className={styles.formError}>
          140 characters limit exceeded for description
        </p>
      )}
      <button type='submit' className='sr-only'>
        Submit
      </button>
      <div className={styles.bottomRowWrapper}>
        <button onClick={() => deleteIdea(idea.id)}>Delete</button>
        <div className={styles.dateWrapper}>
          Last updated:{' '}
          <time dateTime={dayjs(idea.lastUpdated).format('YYYY-MM-DD')}>
            {dayjs(idea.lastUpdated).format('DD/MM HH:mm:ss')}
          </time>
        </div>
      </div>
    </form>
  );
}
