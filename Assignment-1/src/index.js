const fs = require('fs')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await new Promise((res, rej) => {
		fs.writeFile(fileName, fileContent, (err) => {
			if (err) {
				console.log(err);
			}
			console.log('file is created')
			res()
		})
	})
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	await new Promise((res, rej) => {
		fs.readFile(fileName, 'utf-8', (err, data) => {
			if (err) {
				console.log(err)
			}
			if (data) {
				console.log(data);
			}
			res();
		})
	})
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await new Promise((res, rej) => {
		fs.appendFile(fileName, fileContent, (err) => {
			if (err) {
				console.log(err);
			}
			console.log('file is appended');
			res();
		})
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await new Promise((res, rej) => {
		fs.unlink(fileName, (err) => {
			if (err) {
				console.log(err);
			}
			console.log('file is deleted');
			res();
		})
	})
}


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }



