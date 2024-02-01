export const SELECT_NOMINEE = 'SELECT_NOMINEE';

export const selectNominee = (categoryId, nomineeId) => ({
  type: SELECT_NOMINEE,
  payload: { categoryId, nomineeId },
});
