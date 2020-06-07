# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# nagao = User.create!(email: 'nagao@example.com', password: 'password')
# shuhei = User.create!(email: 'shuhei@example.com', password: 'password')
nagao = User.find(2)
shuhei = User.find(3)

# 5.times do
#     shuhei.articles.create!({title: Faker::Lorem.sentence(word_count: 5), content: Faker::Lorem.sentence(word_count: 50)})
# end

shuhei.articles.create(title: 'seedで作成ができないぞ？', content: '理由がなぜだかわからないマン。これがわかるまで起きてるマン。早く寝たい。明日わし仕事ぞ。あ。わかった。文字数足りてないだけやった。アクションに!つけてなかったから全然気づかんかった。おやすみなさい。')

# 5.times do
#     nagao.articles.create!(
#         title: Faker::Lorem.sentence(word_count: 5), content: Faker::Lorem.sentence(word_count: 50)
        
#     )
# end
