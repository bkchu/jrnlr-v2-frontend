import { useState } from 'react';
import { Box, Button, Form, Input } from '../components';

export default function login() {
  const [inputs, setInputs] = useState({});
  console.log(inputs);

  const onChange = e => {
    setInputs({
      ...inputs,
      [e.target.name.replace(' ', '')]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <Box width={['100%', null, 1 / 2]} mx="auto" textAlign="right">
      {/* <AllPosts></AllPosts> */}
      <Form onSubmit={onSubmit}>
        <Input
          name="username"
          placeholder="Username"
          value={inputs.username}
          onChange={onChange}
          required
        />
        <Input
          name="password"
          placeholder="Password"
          value={inputs.password}
          onChange={onChange}
          type="password"
          required
        />
        <Box display="flex" justifyContent="flex-end" pt="4">
          <Button width={['100%', null, 1 / 2]}>Login</Button>
        </Box>
      </Form>
    </Box>
  );
}
