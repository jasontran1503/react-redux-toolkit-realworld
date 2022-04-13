import { GenericError } from 'appModels';

export const useErrors = (error: GenericError | null) => {
  if (error) {
    const errors = error.errors;
    const result: string[] = [];
    const errorsText = Object.keys(errors).map((k) => {
      result.push((k + ' ' + errors[k][0]));
      return result;
    });
    return errorsText[0];
  }
};
