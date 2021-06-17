import styles from './NetworkSetting.module.scss';
import {useState} from "react";
import {Portal} from "../Portal/Portal";
import {ipPattern, subnetMaskPattern, dnsPattern} from "../../patterns/pattern";

export default function EthernetSettings() {

    const [ethernetSettings, setEthernetSettings] = useState({
        ipAutomaticRadioEthernet: true,
        ipManualRadioEthernet: false,
        ipAddressEthernet: '',
        subnetMaskEthernet: '',
        defaultGatewayEthernet: '',
        dnsAutomaticRadioEthernet: true,
        dnsManualRadioEthernet: false,
        preferredDNSServerEthernet: '',
        alternativeDNSServerEthernet: ''
    });

    function handleInputChangeEthernet(e) {
        let target = e.target;
        let name = target.id;
        let val = target.type === 'text' ? target.value : target.checked;
        setEthernetSettings({
            ...ethernetSettings,
            [name]: val
        })
    }

    return (
        <div className={styles.networkSettings}>
            <h5>Ethernet Settings</h5>
            <label htmlFor="ipAutomaticRadioEthernet">
                <input id="ipAutomaticRadioEthernet" name="ipEthernet" type="radio"
                       checked={ethernetSettings.ipAutomaticRadioEthernet}
                       onChange={() => setEthernetSettings({
                           ...ethernetSettings,
                           ipAutomaticRadioEthernet: true,
                           ipManualRadioEthernet: false
                       })}/>
                <p>Obtain an IP address automatically (DHCP/BootP)</p>
            </label>
            <label htmlFor="ipManualRadioEthernet">
                <input id="ipManualRadioEthernet" name="ipEthernet" type="radio"
                       checked={!ethernetSettings.ipAutomaticRadioEthernet}
                       onChange={() => setEthernetSettings({
                           ...ethernetSettings,
                           ipAutomaticRadioEthernet: false,
                           ipManualRadioEthernet: true
                       })}/>
                <p>Use the following IP address:</p>
            </label>
            <ul>
                <li>
                    <label htmlFor="ipAddressEthernet">
                        <p>IP address:*</p>
                        <input id="ipAddressEthernet" type="text"
                               value={ethernetSettings.ipAddressEthernet}
                               disabled={!ethernetSettings.ipManualRadioEthernet} required
                               onChange={handleInputChangeEthernet}/>
                    </label>
                    <Portal value={ethernetSettings.ipAddressEthernet} pattern={ipPattern}/>
                </li>
                <li>
                    <label htmlFor="subnetMaskEthernet">
                        <p>Subnet Mask:*</p>
                        <input id="subnetMaskEthernet" type="text"
                               value={ethernetSettings.subnetMaskEthernet}
                               disabled={!ethernetSettings.ipManualRadioEthernet} required
                               onChange={handleInputChangeEthernet}/>
                    </label>
                    <Portal value={ethernetSettings.subnetMaskEthernet} pattern={subnetMaskPattern}/>
                </li>
                <li>
                    <label htmlFor="defaultGatewayEthernet">
                        <p>Default Gateway:</p>
                        <input id="defaultGatewayEthernet" type="text"
                               value={ethernetSettings.defaultGatewayEthernet}
                               disabled={!ethernetSettings.ipManualRadioEthernet} onChange={handleInputChangeEthernet}/>
                    </label>
                </li>
            </ul>
            <label htmlFor="dnsAutomaticRadioEthernet">
                <input id="dnsAutomaticRadioEthernet" name="dnsEthernet" type="radio"
                       checked={ethernetSettings.dnsAutomaticRadioEthernet}
                       onChange={() => setEthernetSettings({
                           ...ethernetSettings,
                           dnsAutomaticRadioEthernet: true,
                           dnsManualRadioEthernet: false
                       })}/>
                <p>Obtain DNS server address automatically</p>
            </label>
            <label htmlFor="dnsManualRadioEthernet">
                <input id="dnsManualRadioEthernet" name="dnsEthernet" type="radio"
                       checked={!ethernetSettings.dnsAutomaticRadioEthernet}
                       onChange={() => setEthernetSettings({
                           ...ethernetSettings,
                           dnsAutomaticRadioEthernet: false,
                           dnsManualRadioEthernet: true
                       })}/>
                <p>Use the following DS server address:</p>
            </label>
            <ul>
                <li>
                    <label htmlFor="preferredDNSServerEthernet">
                        <p>Preferred DNS server address:*</p>
                        <input id="preferredDNSServerEthernet" type="text"
                               value={ethernetSettings.preferredDNSServerEthernet}
                               disabled={!ethernetSettings.dnsManualRadioEthernet} required
                               onChange={handleInputChangeEthernet}/>
                    </label>
                    <Portal value={ethernetSettings.preferredDNSServerEthernet} pattern={dnsPattern}/>
                </li>
                <li>
                    <label htmlFor="alternativeDNSServerEthernet">
                        <p>Alternative DNS server:</p>
                        <input id="alternativeDNSServerEthernet" type="text"
                               value={ethernetSettings.alternativeDNSServerEthernet}
                               disabled={!ethernetSettings.dnsManualRadioEthernet}
                               onChange={handleInputChangeEthernet}/>
                    </label>
                </li>
            </ul>
        </div>
    )
}