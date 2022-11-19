const { myFileWriter, myFileUpdater, myFileReader, myFileDeleter } = require('./index');

myFileWriter('file.txt', 'some text inside');
myFileUpdater('file.txt', 'some more content');
myFileReader('file.txt');
myFileDeleter('file.txt')


