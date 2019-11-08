import path from 'path'
import pupDevices from 'puppeteer/DeviceDescriptors'
import initStoryshots from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'

const rootDir = path.join(__dirname, './')
const storybookStatic = path.join(rootDir, 'storybook-static')
const supportedDevices = new Set([ 'iPhone 4', 'iPad', 'iPhone X' ])

const createCustomizePage = (pupDevice) => {
	return function(page){
		return page.emulate(pupDevice)
	}
}

for (let supportedDevice of supportedDevices) {
	const pupDevice = pupDevices[supportedDevice]

	if (!pupDevice) {
		continue
	}

	const customizePage = createCustomizePage(pupDevice)

	initStoryshots({
		suite: `Image storyshots: ${pupDevice.name}`,
		test: imageSnapshot({
			storybookUrl: `file://${storybookStatic}`,
			customizePage
		})
	})
}
