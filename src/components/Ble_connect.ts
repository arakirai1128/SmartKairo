import * as Bluetooth from 'react-bluetooth';
import Ble_uuid from '../Settings/Ble_uuid';

export const BleChoice = async () => {
    //bluetooth可能デバイスか調べる
    const isAvailable = await Bluetooth.getAvailabilityAsync();

    if (!isAvailable) {
        const err_text = '現在のデバイスは、bluetoothに対応していません';
        console.log(err_text);
        return err_text;
    }

    // filter
    const options = {
        filters: [
            { services: [Ble_uuid.SERVICE_UUID] },
            { name: 'SMART KAIRO' },
        ],
        optionalServices: [Ble_uuid.SERVICE_UUID]
    };

    const result = await Bluetooth.requestDeviceAsync(options);
    if (result.type === 'cancel') {
        return result.type;
    }
    
    const { device } = result;

    return device.gatt;
}

// bluetooth connect
const Connect = async (device_gatt:any) => {
    try {

        if (device_gatt) {

            //ble接続
            const server = await device_gatt.connect();
            //サービス検出
            const service = await server.getPrimaryService(Ble_uuid.SERVICE_UUID);
            // ペリフェラルから受信用
            const characteristic_RX = await service.getCharacteristic(Ble_uuid.CHARACTERISTIC_UUID_RX);
            // ペリフェラルに送信用
            const characteristic_TX = await service.getCharacteristic(Ble_uuid.CHARACTERISTIC_UUID_TX);

            return { gatt: device_gatt, Characteristic_TX: characteristic_TX, Characteristic_RX: characteristic_RX, Server: server };

        } else {
            console.error(`Error: connected device did not have a GATT`);
        }

    } catch (message) {
        alert('デバイスと接続できませんでした。');
        console.error(`error: ${message}`);
        return;
    }
}

export default Connect;