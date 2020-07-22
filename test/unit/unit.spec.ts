import { deep } from '../../build';
import { nestedObject } from './support';

test('returns nested property value', () => {
  const title = deep(nestedObject)
    .very({ id: 7 })
    .deep[1]
    .structure({ id: 2 })
    .items[2]
    .title
    .retrieve();

  expect(title).toBe('Item title');
});

test('returns undefined when accessing property of unset property', () => {
  const value = deep(nestedObject)
    .very({ id: 7 })
    .deep[0]
    .structure({ id: 4 })
    .items[5]
    .unset
    .value
    .retrieve();

  expect(value).toBe(undefined);
});

test('returns undefined when accessing property of null property', () => {
  const value = deep(nestedObject)
    .very({ id: 7 })
    .deep[1]
    .structure({ id: 2 })
    .items({ id: 6 })
    .description
    .value
    .retrieve();

  expect(value).toBe(undefined);
});

test('allows to retrieve properties with reserved names', () => {
  const retrieveValue = deep(nestedObject)
    .very({ id: 7 })
    .deep[1]
    .structure({ id: 2 })
    .items({ id: 11 })
    .get('retrieve')
    .retrieve();

  const getValue = deep(nestedObject)
    .very({ id: 7 })
    .deep[1]
    .structure({ id: 2 })
    .items({ id: 11 })
    .get('get')
    .retrieve();

  expect(retrieveValue).toBe('I am reserved!');
  expect(getValue).toBe('I am reserved as well!');
});

test('allows to filter the root array', () => {
  const retrieveResult = deep([1, 2, 3], { clone: true })
    .filter((value: number) => value % 2 === 0)
    .retrieve();

  const retrieveRootResult = deep([1, 2, 3], { clone: true })
    .filter((value: number) => value % 2 === 0)
    .retrieveRoot();

  expect(retrieveResult).toEqual([2]);
  expect(retrieveRootResult).toEqual([2]);
});
