.PHONY: dev

dev:
	npx expo start --clear

dev-lan:
	npx expo start --lan --clear

emulator-android:
	adb kill-server
	adb start-server
	emulator -avd Pixel_Dev -gpu host -dns-server 8.8.8.8 -no-snapshot-load &