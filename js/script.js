//1. capturo todos los botones de filtrado uno por uno.
const filterButttons = document.querySelector('.main-header__filters');
const movies = document.querySelectorAll('.movie-grid__item');

//2. creo un eventListener para cada boton de filtrado.
filterButttons.addEventListener('click', function (e) {


  //3. leo el atributo dataset del boton
  //guardo en variable que boton he clickeado
  const clickedBtn = e.target;

  //extraigo el data-filter del objeto dataset
  const filtername = clickedBtn.dataset.filtro;

  //5. recorro todas las peliculas con un foreach y comparo el calor del data filter con el calor de data-cateoria de cada pelicula.

    //hacer que los espacios entre botones sean clicables (no detecte el boton)
    if (filtername)
      movies.forEach(movie => {

      //Extraigo data-category
      const categoria = movie.dataset.categoria;

      
      //si es igual, lo muestro; si no, lo oculto
      if (filtername === categoria) {
        movie.style.display = 'block';
      } else{
        movie.style.display = 'none';
      }

      //para que muestre todas las peliculas
      if (filtername === 'all') {
        movie.style.display = 'block';
      }
      

      
  })

});