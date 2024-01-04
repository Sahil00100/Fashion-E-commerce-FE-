
const PromoSectionMain = (props) => {
  const styles = {
    pageHeader: {
      backgroundImage: 'url(' + props.pageHeaderBgImg + ')',
      minHeight: props.pageHeaderMinVh,
    },
  }
  return(
    <section className="mb-8">
    <div className="page-header py-5 py-md-0" style={styles.pageHeader}>
      <span  className="mask bg-black opacity-6"></span>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-sm-9 text-center mx-auto">
            <h1 className="text-white mb-4">{props.title}</h1>
            <p className="lead text-white mb-sm-6 mb-4">{props.full_description}</p>
            <button className="btn btn-white btn-lg">Explore New Collection</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
  
  export default PromoSectionMain;
  