import PaginatedItems from './Pagination';

const ShowData = () => {
  return (
    <>
        <h1 className='m-3'>Products details</h1>
        <hr/>
        <br/>
        <div className='container'><PaginatedItems itemsPerPage={6} /></div>
    </>
  );
};

export default ShowData;
