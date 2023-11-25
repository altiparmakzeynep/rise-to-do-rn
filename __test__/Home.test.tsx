import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Home from '../src/screens/home/Home';
jest.mock('@react-native-async-storage/async-storage', () => require('@react-native-async-storage/async-storage/jest/async-storage-mock'));

describe('Home Screen Tests', () => {
  //RENDER TEST
  test('Renders Home component', () => {
    const { getByText } = render(<Home />);
    const appText = getByText('Daily Routine Planner App');
    expect(appText).toBeDefined();
  });

  test('Opens the modal', async () => {
    const { getByTestId } = render(<Home />);
  
    // Open modal
    fireEvent.press(getByTestId('createTaskButton'));
    // Check if modal is open
    const modalOpen = getByTestId('modal');
    expect(modalOpen).toBeDefined();

  });
  test('Selecting categories in modal', async () => {
    const { getByTestId } = render(<Home />);
      // Open modal
      fireEvent.press(getByTestId('createTaskButton'));
      // Check if modal is open
      const modalOpen = getByTestId('modal');
      expect(modalOpen).toBeDefined();
      
      //test select category buttons
      const categoryRed = getByTestId('red-checkbox')
      fireEvent.press(categoryRed)
      const categoryGreen = getByTestId('green-checkbox')
      fireEvent.press(categoryGreen)
      const categoryOrange = getByTestId('orange-checkbox')
      fireEvent.press(categoryOrange)
      const categoryPink = getByTestId('pink-checkbox')
      fireEvent.press(categoryPink)
      const categoryPurple = getByTestId('purple-checkbox')
      fireEvent.press(categoryPurple)
  });
});
