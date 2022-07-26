const db = require('../db')
const Song = require('../models/song')
const Post = require('../models/post')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  //Add the songs
  const songs = [
    {
      id: 1,
      name: 'Family Affair',
      artist: 'Mary J. Blige',
      genre: ['R&B', 'Hip Pop'],
      cover: 'https://i.scdn.co/image/ab67616d0000b273096a7fc9668305db9d3175fc'
    },
    {
      id: 2,
      name: 'Edge of Seventeen',
      artist: 'Stevie Nicks',
      genre: ['Rock', 'Soft Rock'],
      cover: 'https://i.scdn.co/image/ab67616d0000b273af14d74d5e308ce2f3ec22f8'
    },
    {
      id: 3,
      name: 'Rainbow Connection',
      artist: 'Kermit the Frog',
      genre: ['Cartoon', 'Movie Tunes'],
      cover: 'https://i.scdn.co/image/ab67616d0000b27325440ce722ccf10e4d000c3d'
    },
    {
      id: 4,
      name: `Sweet Child O' Mine`,
      artist: `Guns N' Roses`,
      genre: ['Hard Rock', 'Rock', 'Glam Metal'],
      cover: 'https://i.scdn.co/image/ab67616d0000b27321ebf49b3292c3f0f575f0f5'
    },
    {
      id: 5,
      name: 'Thriller',
      artist: 'Michael Jackson',
      genre: ['Pop', 'R&B'],
      cover: 'https://i.scdn.co/image/ab67616d0000b2734121faee8df82c526cbab2be'
    },
    {
      id: 6,
      name: 'Here It Goes Again',
      artist: 'OK GO',
      genre: ['Alt Rock', 'Pop Rock', 'Indie Rock'],
      cover: 'https://i.scdn.co/image/ab67616d0000b27371e01645abce04dda00e1c0c'
    },
    {
      id: 7,
      name: 'Title Theme',
      artist: 'The Marcus Hedges Trend Orchestra',
      genre: ['Scorecore', 'VGM'],
      cover: 'https://i.scdn.co/image/ab67616d0000b273ec30b64fc7a3e86e54924cb4'
    },
    {
      id: 8,
      name: `Don't You (Forget About Me)`,
      artist: 'Simple Minds',
      genre: ['New Romantic', 'Soft Rock', 'Synthpop'],
      cover: 'https://i.scdn.co/image/ab67616d0000b2735695a657aef0e81bde0c6001'
    },
    {
      id: 9,
      name: 'Here Comes The Sun',
      artist: 'The Beatles',
      genre: ['Classic Rock', 'Rock'],
      cover: 'https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25'
    },
    {
      id: 10,
      name: 'Work It',
      artist: 'Missy Elliott',
      genre: ['Hip Hop', 'R&B', 'Dance Pop'],
      cover: 'https://i.scdn.co/image/ab67616d0000b27395d8583bba8f3cd794fa5bae'
    },
    {
      id: 11,
      name: 'Tokyo Drift (Fast & Furious)',
      artist: 'Teriyaki Boyz',
      genre: ['Hip Hop', 'Japanese Old School'],
      cover: 'https://i.scdn.co/image/ab67616d0000b2738b660b58d947c1d666d635c0'
    },
    {
      id: 12,
      name: 'Song Example',
      artist: 'Artist',
      genre: ['Hip Hop', 'R&B'],
      cover: 'https://i.scdn.co/image/ab67616d0000b2738b660b58d947c1d666d635c0'
    }
  ]

  await Song.insertMany(songs)
  console.log("Here's the setlist!")

  //Add the posts
  const posts = [
    {
      songId: 1,
      username: 'mjbfan',
      title: 'Family Affair Tote',
      image:
        'https://ctl.s6img.com/society6/img/9uze1MHfvOpGksmCZF87Uv_PlFo/w_700/bags/small/close/~artwork,fw_3500,fh_3500,fx_174,fy_174,iw_3150,ih_3150/s6-original-art-uploads/society6/uploads/misc/89628a8360364357a7280234a6e95df3/~~/no-hateration-holleration-in-this-dancery-mary-j-blige-street-sign-bags.jpg',
      description: `Now everyone at Trader Joe's will know that I don't tolerate any hateration or holleration in this dancery`,
      likes: 0
    },
    {
      songId: 2,
      username: 'stevieee',
      title: 'Dove Tattoo',
      image:
        'https://ih1.redbubble.net/image.739857896.6358/fposter,small,wall_texture,product,750x1000.jpg',
      description:
        'My Edge of Seventeen inspired tattoo! Love how the template turned out. So excited to get this done. Check out the parlor if you are in the area!',
      likes: 0
    },
    {
      songId: 3,
      username: 'yellowstonebear',
      title: 'Double Rainbow!',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMavwmWEvr19Cv6TOWmQIuBVNUOjvdv9IQjw&usqp=CAU',
      description:
        'This must be what Kermit meant by the Rainbow Connection. Double rainbow all the way!',
      likes: 0
    },
    {
      songId: 4,
      username: 'puprock',
      title: 'Rockin out with Orpheus',
      image:
        'https://media.gettyimages.com/photos/playing-guitar-to-dog-picture-id1215014948?s=2048x2048',
      description:
        'This is MY sweet child listening to me play some tunes in the living room. Starting to think he loves music more than I do!',
      likes: 0
    },
    {
      songId: 5,
      username: 'tracyjordan',
      title: 'Werewolf Bar Mitzvah',
      image:
        'https://scpr.brightspotcdn.com/legacy/i/55435327daed337cc745e816c2929797/5bcf792ed217300008df8143-eight.jpg',
      description: `Tribute to my favorite artist Michael Jackson! Here's a sneak peek at the Thriller inspired music video for my new song 'Werewolf Bar Mitzvah`,
      likes: 0
    },
    {
      songId: 6,
      username: 'okstop',
      title: 'Here I Go Again...',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBZdDqHRgEqt3_4cfWGW8MspbUtaklgYb3cg&usqp=CAU',
      description:
        'Would not recommend trying to recreate the music video at home...',
      likes: 0
    },
    {
      songId: 1,
      username: 'hateration',
      title: 'holleration',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.De-bnV61-45mcOmwv5ds_gHaEM%26pid%3DApi&f=1',
      description: `Test Post in this dancery`,
      likes: 0
    }
  ]

  await Post.insertMany(posts)
  console.log('Uploaded some posts')

  //Add the users
  const users = [
    {
      name: 'Vivian S Crawford',
      email: 'pablo_haa2@yahoo.com',
      username: 'pablo_haa2',
      password: 'Gardner',
      favoriteGenres: ['Rock', 'Classic Rock']
    },
    {
      name: 'Awilda T Lass',
      email: 'cristina1978@hotmail.com',
      username: 'mjbfan',
      password: 'Green',
      favoriteGenres: ['R&B', 'Hip Pop']
    },
    {
      name: 'Marian D Santos',
      email: 'lorenza.casp@yahoo.com',
      username: 'stevieee',
      password: 'Kenny',
      favoriteGenres: ['Rock', 'Soft Rock']
    },
    {
      name: 'Brett R Nichols',
      email: 'chanel2007@gmail.com',
      username: 'yellowstonebear',
      password: 'Vela',
      favoriteGenres: ['Cartoon', 'Movie Tunes']
    },
    {
      name: 'Eugene J Legge',
      email: 'dedric1988@hotmail.com',
      username: 'puprock',
      password: 'Presson',
      favoriteGenres: ['Hard Rock', 'Rock', 'Glam Metal']
    },
    {
      name: 'Tracy Jordan',
      email: 'grizzdotcom@gmail.com',
      username: 'tracyjordan',
      password: 'Jeremy',
      favoriteGenres: ['Pop', 'R&B']
    },
    {
      name: 'John K Barnes',
      email: 'roy2001@yahoo.com',
      username: 'okstop',
      password: 'Evans',
      favoriteGenres: ['Alt Rock', 'Pop Rock', 'Indie Rock']
    }
  ]

  await User.insertMany(users)
  console.log('Added some users')
}

const run = async () => {
  await main()
  db.close()
}

run()
