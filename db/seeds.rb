# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

movies = [
  {
    "title" => "トトロ",
    "genre" => "アニメ",
    "review" => "良い"
  },
  {
    "title" => "トトロ",
    "genre" => "アニメ",
    "review" => "良い"
  },
  {
    "title" => "トトロ",
    "genre" => "アニメ",
    "review" => "良い"
  },
]

movies.each do |x|
  movie = Movie.create(title: x["title"], genre: x["genre"])
  Review.create(content: x["review"], movie_id: movie.id)
end