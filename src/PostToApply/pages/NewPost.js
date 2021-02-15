import React, { useReducer, useCallback } from 'react';
import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button';
import './newPost.css';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH,
} from '../../shared/util/validator';

const postReducer = (state, action) => {
  switch (action.type) {
    case 'NEW_POST':
      let PostValid = true;
      for (const InputId in state.inputs) {
        if (InputId === action.inputId) {
          PostValid = PostValid && action.isValid;
        } else {
          PostValid = PostValid && state.inputs[InputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: PostValid,
      };
    default:
      return state;
  }
};
const NewPost = (props) => {
  const [newPostState, dispatch] = useReducer(postReducer, {
    inputs: {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    isValid: false,
  });

  const newPostHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: 'NEW_POST',
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const submitForm = (event) => {
    event.preventDefault();
    console.log(newPostState.inputs);
  };

  return (
    <form className='form-newPost' onSubmit={submitForm}>
      <Input
        id='title'
        element='input'
        label='Title'
        placeholder='Post Title'
        errorMessage='Title should be not be greater than 10 characters'
        validators={[VALIDATOR_MAXLENGTH(10)]}
        onInput={newPostHandler}
      />
      <Input
        id='description'
        element='textarea'
        label='Description'
        placeholder='description'
        errorMessage='description should not  be less than 100 characters'
        validators={[VALIDATOR_MINLENGTH(100)]}
        onInput={newPostHandler}
      />
      <Button type='submit' disabled={!newPostState.isValid}>
        ADD POST
      </Button>
    </form>
  );
};

export default NewPost;
