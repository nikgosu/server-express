import * as uuid from 'uuid'
import path from 'path'

class FileService{
	static saveFile(file) {
		try {
			const fileName = uuid.v4() + '.jpeg'
			const filePath = path.resolve('static', fileName)
			file.mv(filePath)
			return fileName
		} catch (e) {
			console.log(e.message)
		}
	}
}

export default FileService