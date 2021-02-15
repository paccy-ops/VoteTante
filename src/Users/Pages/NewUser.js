import React, { useCallback, useReducer } from 'react';

import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button';
import { VALIDATOR_REQUIRE } from '../../shared/util/validator';
import './NewUser.css';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

const NewUser = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      lastname: {
        value: '',
        isValid: false,
      },

      firstname: {
        value: '',
        isValid: false,
      },
      Address1: {
        value: '',
        isValid: false,
      },
      Address2: {
        value: '',
        isValid: false,
      },
      email: {
        value: '',
        isValid: false,
      },
      postcode: {
        value: '',
        isValid: false,
      },
      cityProvince: {
        value: '',
        isValid: false,
      },
      phone: {
        value: '',
        isValid: false,
      },
    },
    isValid: false,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!
  };

  return (
    <form className='register-page' onSubmit={placeSubmitHandler}>
      <div>
        <Input
          id='lastname'
          element='input'
          type='text'
          label='Last Name'
          placeholder='Last Name'
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />
        <Input
          id='firstname'
          element='input'
          type='text'
          label='First Name'
          placeholder='First Name'
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />
        <Input
          id='email'
          element='input'
          type='text'
          label='Email'
          placeholder='Email'
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />
        <Input
          id='cityProvince'
          element='input'
          type='text'
          label='City/Province '
          placeholder='City/Province '
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />
      </div>
      <div>
        <Input
          id='Address1'
          element='input'
          type='text'
          label='Address 1'
          placeholder='Address 1'
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />

        <Input
          id='Address2'
          element='input'
          type='text'
          label='Address 2'
          placeholder='Address 2'
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />
        <Input
          id='postcode'
          element='input'
          type='text'
          label='Post Code'
          placeholder='Post Code'
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />
        <Input
          id='phone'
          element='input'
          type='text'
          label='Phone Number'
          placeholder='Phone Number'
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />
      </div>

      <Button type='submit' disabled={!formState.isValid}>
      Register
      </Button>
    </form>
  );
};

export default NewUser;
