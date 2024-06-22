


const mongoose = require('mongoose');
const Video = require('../models/video');

async function insertData() {
  await mongoose.connect('mongodb://localhost:27017/learn', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {

    await Video.create([
      {
        title: 'HTML Beginner Tutorial',
        description: 'A beginner-friendly tutorial for learning HTML.',
        topic: 'HTML',
        level: 'Beginner',
        videoLink: 'https://youtu.be/qz0aGYrrlhU?si=31Ep8eXTCw9_-o4w'
      },
      {
        title: 'HTML Intermediate Tutorial',
        description: 'An intermediate tutorial covering advanced HTML topics.',
        topic: 'HTML',
        level: 'Intermediate',
        videoLink: 'https://youtu.be/kUMe1FH4CHE?si=H5Xm2k4TIQ55G2LD'
      },
      {
        title: 'HTML Advanced Tutorial',
        description: 'An advanced tutorial diving deep into HTML techniques.',
        topic: 'HTML',
        level: 'Advanced',
        videoLink: 'https://youtu.be/FQdaUv95mR8?si=oTvxKt-I3PTO5i0u'
      },
    
    ]);

  
    await Video.create([
      
      {
        title: 'CSS Beginner Tutorial',
        description: 'A beginner-friendly tutorial for learning CSS.',
        topic: 'CSS',
        level: 'Beginner',
        videoLink: 'https://youtu.be/1PnVor36_40?si=esYGP8AA1wmUUG2o'
      },
      {
        title: 'CSS Intermediate Tutorial',
        description: 'An intermediate tutorial covering advanced CSS topics.',
        topic: 'CSS',
        level: 'Intermediate',
        videoLink: 'https://youtu.be/wRNinF7YQqQ?si=meBmkNI4yr-ITEfe'
      },
      {
        title: 'CSS Advanced Tutorial',
        description: 'An advanced tutorial diving deep into CSS techniques.',
        topic: 'CSS',
        level: 'Advanced',
        videoLink: 'https://youtu.be/OXGznpKZ_sA?si=kM1akv17X8yGsfeQ'
      },
    ]);


    await Video.create([
  
      {
        title: 'REACT Beginner Tutorial',
        description: 'A beginner-friendly tutorial for learning REACT.',
        topic: 'REACT',
        level: 'Beginner',
        videoLink: 'https://youtu.be/SqcY0GlETPk?si=NiXwnz0Q_zLiprId'
      },
      {
        title: 'REACT Intermediate Tutorial',
        description: 'An intermediate tutorial covering advanced REACT topics.',
        topic: 'REACT',
        level: 'Intermediate',
        videoLink: 'https://youtu.be/CgkZ7MvWUAA?si=Um34xhT9-qlbdas0'
      },
      {
        title: 'REACT Advanced Tutorial',
        description: 'An advanced tutorial diving deep into REACT techniques.',
        topic: 'REACT',
        level: 'Advanced',
        videoLink: 'https://youtu.be/bMknfKXIFA8?si=4moeoxyP9P_pUixA'
      },
    ]);


    await Video.create([

      {
        title: 'MongoDB Beginner Tutorial',
        description: 'A beginner-friendly tutorial for learning MongoDB.',
        topic: 'MongoDB',
        level: 'Beginner',
        videoLink: 'https://youtu.be/c2M-rlkkT5o?si=zWclKde1B-7UUL_Z'
      },
      {
        title: 'MongoDB Intermediate Tutorial',
        description: 'An intermediate tutorial covering advanced MongoDB topics.',
        topic: 'MongoDB',
        level: 'Intermediate',
        videoLink: 'https://youtu.be/t3UjWbh7mqI?si=LfrQFligNxs_x4z2'
      },
      {
        title: 'MongoDB Advanced Tutorial',
        description: 'An advanced tutorial diving deep into MongoDB techniques.',
        topic: 'MongoDB',
        level: 'Advanced',
        videoLink: 'https://youtu.be/mDgKjb5eWPk?si=O3Lcqc8KESfjmyL9'
      },
    ]);


    await Video.create([

      {
        title: 'Node.js Beginner Tutorial',
        description: 'A beginner-friendly tutorial for learning Node.js.',
        topic: 'Node.js',
        level: 'Beginner',
        videoLink: 'https://youtu.be/TlB_eWDSMt4?si=w7nI7ApWNLoWa068'
      },
      {
        title: 'Node.js Intermediate Tutorial',
        description: 'An intermediate tutorial covering advanced Node.js topics.',
        topic: 'Node.js',
        level: 'Intermediate',
        videoLink: 'https://youtu.be/Oe421EPjeBE?si=83g51ufY-u0UD5Pf'
      },
      {
        title: 'Node.js Advanced Tutorial',
        description: 'An advanced tutorial diving deep into Node.js techniques.',
        topic: 'Node.js',
        level: 'Advanced',
        videoLink: 'https://youtu.be/f2EqECiTBL8?si=rLR9cL58S_pYv2SK'
      },
    ]);

    console.log('Data inserted successfully!');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    await mongoose.disconnect();
  }
}

module.exports = insertData;
