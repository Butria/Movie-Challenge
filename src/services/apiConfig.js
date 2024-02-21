const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '1db8b0e3b4bab33d5ff7f06b7cbf4bc4',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
    w154Image: (imgPath) => `https://image.tmdb.org/t/p/w154/${imgPath}`
  };
  
  export default apiConfig;