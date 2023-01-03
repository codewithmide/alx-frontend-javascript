import ListStudents from '../0-get_list_students';

const existing = [
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' },
];

test('properly gets the expected array', () => {
  expect(
    ListStudents()
    ).toEqual(existing);
});
