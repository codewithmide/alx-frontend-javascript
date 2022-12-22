import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  return Promise.all([photo, user]).then(
    (data) => console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`),
    () => console.log('Signup system offline'),
  );
}
