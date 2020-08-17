# WIFI 配置

> wpa_supplicant.conf
country=CN
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

network={
    ssid="wifiname"
    psk="password"
    priority=1
}