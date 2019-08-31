import { useState } from 'react';
import { Box, Button, Form, Input } from '../components';

export default function register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <Box width={['100%', null, 1 / 2]} mx="auto" textAlign="right">
      {/* <AllPosts></AllPosts> */}
      <Form onSubmit={onSubmit}>
        <Input
          name="Email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          required
        />
        <Input
          name="Password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          required
        />
        <Box display="flex" justifyContent="flex-end">
          <Button width={['100%', null, 1 / 2]}>Login</Button>
        </Box>
      </Form>
    </Box>
  );
}
