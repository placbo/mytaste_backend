export const emptyOrRows = (rows: any) => {
  if (!rows) {
    return [];
  }
  return rows;
};

export const getOffset = (currentPage = 1, listPerPage = 10) => {
  return (currentPage - 1) * listPerPage;
};
