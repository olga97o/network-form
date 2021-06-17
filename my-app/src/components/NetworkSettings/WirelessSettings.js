import styles from './NetworkSetting.module.scss';
import {useRef, useState} from "react";
import {Portal} from "../Portal/Portal";
import {ipPattern, subnetMaskPattern, dnsPattern} from "../../patterns/pattern";

export default function WirelessSettings() {

    const [wirelessSettings, setWirelessSettings] = useState({
        enableWifiWireless: false,
        networkNameWireless: '',
        enableSecurityWireless: false,
        securityKeyWireless: '',
        ipAutomaticRadioWireless: true,
        ipManualRadioWireless: false,
        ipAddressWireless: '',
        subnetMaskWireless: '',
        defaultGatewayWireless: '',
        dnsAutomaticRadioWireless: true,
        dnsManualRadioWireless: false,
        preferredDNSServerWireless: '',
        alternativeDNSServerWireless: ''
    });

    const wirelessNetworkName = useRef(null);

    function handleInputChangeWireless(e) {
        const target = e.target;
        console.log(target)
        const name = target.id;
        const val = target.value ? target.value : target.checked;
        setWirelessSettings({
            ...wirelessSettings,
            [name]: val
        })
    }

    return (
        <div className={styles.networkSettings}>
            <h5>Wireless Settings</h5>
            <label htmlFor="enableWifiWireless">
                <input id="enableWifiWireless" type="checkbox"
                       checked={wirelessSettings.enableWifiWireless}
                       onChange={handleInputChangeWireless}/>
                <p>Enable wifi:</p>
            </label>
            <ul>
                <li>
                    <label htmlFor="networkNameWireless">
                        <p>Wireless Network Name:*</p>
                        <select name="networks" id="networkNameWireless" required ref={wirelessNetworkName}
                                value={wirelessSettings.networkNameWireless}
                                disabled={!wirelessSettings.enableWifiWireless}
                                onChange={handleInputChangeWireless}>
                            <option value="TP-Link_578z">TP-Link_578z</option>
                            <option value="HUAWEI-15">HUAWEI-15</option>
                            <option value="TP-Link_56">TP-Link_56</option>
                            <option value="HUAWEI-243">HUAWEI-243</option>
                        </select>
                        <button type="reset" onClick={() => wirelessNetworkName.current.value = ''} disabled={!wirelessSettings.enableWifiWireless}>Reset</button>
                    </label>
                </li>
            </ul>
            <label htmlFor="enableSecurityWireless">
                <input id="enableSecurityWireless" type="checkbox"
                       disabled={!wirelessSettings.enableWifiWireless}
                       checked={wirelessSettings.enableSecurityWireless}
                       onChange={handleInputChangeWireless}/>
                <p>Enable Wireless Security:</p>
            </label>
            <ul>
                <li>
                    <label htmlFor="securityKeyWireless">
                        <p>Security Key:*</p>
                        <input id="securityKeyWireless" type="text"
                               value={wirelessSettings.securityKeyWireless} required
                               disabled={!wirelessSettings.enableSecurityWireless}
                               onChange={handleInputChangeWireless}/>
                    </label>
                </li>
            </ul>
            <label htmlFor="ipAutomaticRadioWireless">
                <input id="ipAutomaticRadioWireless" type="radio" name="ipWireless"
                       checked={wirelessSettings.ipAutomaticRadioWireless}
                       disabled={!wirelessSettings.enableWifiWireless}
                       onChange={() => setWirelessSettings({
                           ...wirelessSettings,
                           ipAutomaticRadioWireless: true,
                           ipManualRadioWireless: false
                       })}/>
                <p>Obtain an IP address automatically (DHCP/BootP)</p>
            </label>
            <label htmlFor="ipManualRadioWireless">
                <input id="ipManualRadioWireless" type="radio" name="ipWireless"
                       checked={!wirelessSettings.ipAutomaticRadioWireless}
                       disabled={!wirelessSettings.enableWifiWireless}
                       onChange={() => setWirelessSettings({
                           ...wirelessSettings,
                           ipAutomaticRadioWireless: false,
                           ipManualRadioWireless: true
                       })}/>
                <p>Use the following IP address:</p>
            </label>
            <ul>
                <li>
                    <label htmlFor="ipAddressWireless">
                        <p>IP address:*</p>
                        <input id="ipAddressWireless"
                               type="text"
                               value={wirelessSettings.ipAddressWireless}
                               required disabled={!wirelessSettings.ipManualRadioWireless}
                               onChange={handleInputChangeWireless}/>
                    </label>
                    <Portal value={wirelessSettings.ipAddressWireless} pattern={ipPattern} />
                </li>
                <li>
                    <label htmlFor="subnetMaskWireless">
                        <p>Subnet Mask:*</p>
                        <input id="subnetMaskWireless" type="text"
                               value={wirelessSettings.subnetMaskWireless}
                               required disabled={!wirelessSettings.ipManualRadioWireless}
                               onChange={handleInputChangeWireless}/>
                    </label>
                    <Portal value={wirelessSettings.subnetMaskWireless} pattern={subnetMaskPattern} />
                </li>
                <li>
                    <label htmlFor="defaultGatewayWireless">
                        <p>Default Gateway:</p>
                        <input id="defaultGatewayWireless" type="text"
                               value={wirelessSettings.defaultGatewayWireless}
                               disabled={!wirelessSettings.ipManualRadioWireless}
                               onChange={handleInputChangeWireless}/>
                    </label>
                </li>
            </ul>
            <label htmlFor="dnsAutomaticRadioWireless">
                <input id="dnsAutomaticRadioWireless" type="radio" name="dnsWireless"
                       checked={wirelessSettings.dnsAutomaticRadioWireless}
                       disabled={!wirelessSettings.enableWifiWireless}
                       onChange={() => setWirelessSettings({
                           ...wirelessSettings,
                           dnsAutomaticRadioWireless: true,
                           dnsManualRadioWireless: false
                       })}/>
                <p>Obtain DNS server address automatically</p>
            </label>
            <label htmlFor="dnsManualRadioWireless">
                <input id="dnsManualRadioWireless" type="radio" name="dnsWireless"
                       checked={!wirelessSettings.dnsAutomaticRadioWireless}
                       disabled={!wirelessSettings.enableWifiWireless}
                       onChange={() => setWirelessSettings({
                           ...wirelessSettings,
                           dnsAutomaticRadioWireless: false,
                           dnsManualRadioWireless: true
                       })}/>
                <p>Use the following DS server address:</p>
            </label>
            <ul>
                <li>
                    <label htmlFor="preferredDNSServerWireless">
                        <p>Preferred DNS server address:*</p>
                        <input id="preferredDNSServerWireless" type="text"
                               value={wirelessSettings.preferredDNSServerWireless} required
                               disabled={!wirelessSettings.dnsManualRadioWireless}
                               onChange={handleInputChangeWireless}/>
                    </label>
                    <Portal value={wirelessSettings.preferredDNSServerWireless} pattern={dnsPattern} />
                </li>
                <li>
                    <label htmlFor="alternativeDNSServerWireless">
                        <p>Alternative DNS server:</p>
                        <input id="alternativeDNSServerWireless" type="text"
                               value={wirelessSettings.alternativeDNSServerWireless}
                               disabled={!wirelessSettings.dnsManualRadioWireless}
                               onChange={handleInputChangeWireless}/>
                    </label>
                </li>
            </ul>
        </div>
    )
}