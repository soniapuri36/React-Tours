function ToursList({tours}) {
  return (
    tours.map((tour) => {
      const { id, name, info, image, price } = tour;

      return ( 
      <div>
        <h1>{name}</h1>
        <p>{image}</p>
        <p>{info}</p>
        <p>{price}</p>
      </div>
      )
    })
  )
};

export default ToursList;