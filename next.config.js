module.exports = {
  exportPathMap: function () {
    // Create a list of film ids [1, 2, 3... ]
    const filmList = Array(7).fill().map((_, i) => i + 1)

    // Tranform the list of film ids into a map of pages with the pathname `/film/:id`
    const filmPages = filmList.reduce(
      (filmPages, filmId) =>
        Object.assign({}, filmPages, {
          [`/films/${filmId}`]: {
            page: '/films',
            query: { id: filmId }
          }
        }),
      {}
    )

    // Combine the film pages with the home and about pages
    return Object.assign({}, filmPages, {
      '/': { page: '/' },
      '/about': { page: '/about' }
    })
  }
}
