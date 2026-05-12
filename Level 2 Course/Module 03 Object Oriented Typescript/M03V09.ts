// Abstraction, the 3rd Pillar of OOP
// abstraction - an idea without a clear implementation
// real implemetation is late to get

// two way to user abstration, 1. interface, 2. abstract class

// let's try with interface
interface MediaPlayer {
    play() : void;          // we have idea of play, pause and stop, but we don't know how they work
    pause() : void;
    stop() : void;
}

// let's declare a class, whic must follow a given structure
class MusicPlayer implements MediaPlayer {      // implements - force the interface MediaPlayer to be implemented on class MusicPlayer
    // MusicPlayer must have the properties of interface MediaPlayer as method
   play(): void {
       console.log('Playing Music;');       // now we know how play works
   }

   pause(): void {
       console.log('The Music is Paused!');       // now we know how pause works
   }
    stop(): void {
        console.log('The Music is Stopped!!');       // now we know how stop works
    }
}

// we had idea of play, pause and stop, but had know knowledge of their implementation until class MusicPlayer is declared
// hence idea comes first, implementation later - abstraction
// keyword to follow- implements

// let's create an instance
const myPlayer = new MusicPlayer();
myPlayer.play();        // Playing Music;
myPlayer.pause();       // The Music is Paused!
myPlayer.stop();        // The Music is Stopped!!

// abstract class
abstract class MusicPlayer1 implements MediaPlayer {      // implements - force the interface MediaPlayer to be implemented on class MusicPlayer
    // MusicPlayer must have the properties of interface MediaPlayer as method
   play(): void {
       console.log('Playing Music;');       // now we know how play works
   }

   pause(): void {
       console.log('The Music is Paused!');       // now we know how pause works
   }
    stop(): void {
        console.log('The Music is Stopped!!');       // now we know how stop works
    }
}

abstract class MediaPlayer {    // abstract keyword
    play() : void;
    pause() : void;
    stop() : void;
}

// ERROR
// Function implementation is missing or not immediately following the declaration.

abstract class MediaPlayer1 {    // abstract keyword
    abstract play() : void;     // every properties of an abstract class must comtaim abstract keyword
    abstract pause() : void;
    abstract stop() : void;
}

// for interface, idea is implemented of class, and properties were accessed with dot notation as methods only after an instance of that class
// there class followed interface

// we cannot creat an onstace of an abstract class
const myPlayer1 = new MediaPlayer();

// ERROR
// Cannot create an instance of an abstract class.

// we have to create child class from the leader/parent abstract class through extension
// let's create a child class
class MusicPlayer2 extends MediaPlayer1{        // once declaration, properties are required to be implemented
    play(): void {
        console.log('Music Playing.');
    }

    pause(): void {
        console.log('Music Paused!');
    }

    stop(): void {
        console.log('Music Stopped!!')
    }
}

const musicPlayer2 = new MusicPlayer2();

musicPlayer2.pause();
musicPlayer2.play();
musicPlayer2.stop();


