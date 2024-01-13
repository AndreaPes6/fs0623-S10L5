import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BarraDiRicerca from '../components/BarraDiRicerca';
import CittaImportanti from '../components/CittaImportanti';
import Nuvole from '../components/nuvole';
import Precipitazioni from '../components/precipitazioni';
import Temperatura from '../components/Temperatura';
import Vento from '../components/vento';

test('renders BarraDiRicerca component', () => {
  const { getByPlaceholderText, getByText } = render(<BarraDiRicerca />);
  
  const inputElement = getByPlaceholderText('Inserisci il nome della città');
  const buttonElement = getByText('Cerca');

  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('calls onSearch with the entered city when form is submitted', () => {
  const mockOnSearch = jest.fn();
  const { getByPlaceholderText, getByText } = render(<BarraDiRicerca onSearch={mockOnSearch} />);
  
  const inputElement = getByPlaceholderText('Inserisci il nome della città');
  const buttonElement = getByText('Cerca');

  fireEvent.change(inputElement, { target: { value: 'Roma' } });
  fireEvent.submit(buttonElement);

  expect(mockOnSearch).toHaveBeenCalledWith('Roma');
});

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      days: [{
        humidity: 70,
        precip: 5,
        precipprob: 30,
        windspeed: 15,
        cloudcover: 20,
      }],
    }),
    ok: true,
  })
);

beforeEach(() => {
  jest.clearAllMocks();
});

test('renders CittaImportanti component with loading state', () => {
  const { getByText } = render(<CittaImportanti cityName="Rome" />);

  const loadingElement = getByText('Loading data...');

  expect(loadingElement).toBeInTheDocument();
});

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      days: [{
        cloudcover: 50,
      }],
    }),
    ok: true,
  })
);

beforeEach(() => {
  jest.clearAllMocks();
});

test('renders Nuvole component with loading state', () => {
  const { getByText } = render(<Nuvole city="Rome" />);

  const loadingElement = getByText('Loading temperature data...');

  expect(loadingElement).toBeInTheDocument();
});

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      days: [{
        precip: 10,
        precipprob: 40,
        precipcover: 20,
      }],
    }),
    ok: true,
  })
);

beforeEach(() => {
  jest.clearAllMocks();
});

test('renders Precipitazioni component with loading state', () => {
  const { getByText } = render(<Precipitazioni city="Rome" />);

  const loadingElement = getByText('Loading precipitazioni data...');

  expect(loadingElement).toBeInTheDocument();
});

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      days: [{
        temp: 25,
      }],
    }),
    ok: true,
  })
);

beforeEach(() => {
  jest.clearAllMocks();
});

test('renders Temperatura component with loading state', () => {
  const { getByText } = render(<Temperatura city="Rome" />);

  const loadingElement = getByText('Loading temperature data...');

  expect(loadingElement).toBeInTheDocument();
});

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      days: [{
        windspeed: 15,
      }],
    }),
    ok: true,
  })
);

beforeEach(() => {
  jest.clearAllMocks();
});

test('renders Vento component with loading state', () => {
  const { getByText } = render(<Vento city="Rome" />);

  const loadingElement = getByText('Loading vento data...');

  expect(loadingElement).toBeInTheDocument();
});