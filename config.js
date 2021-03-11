module.exports = {

    mqtt: {
        host: 'localhost',
        port: 1883,
        user: '',
        password: ''
    },

    https: {
        privateKey: '/mnt/data/root/node-key2.pem',
        certificate: '/mnt/data/root/munrexio.crt',
        port: 443
    },

    clients: [
        {
            id: '1',
            name: 'Yandex',
            clientId: 'yandex-smarthome12345',
            clientSecret: 'secret12345',
            isTrusted: false
        },
    ],

    users: [
        {
            id: '1',
            username: 'admin',
            password: 'admin',
            name: 'Administrator'
        },
        {
            id: '2',
            username: 'root',
            password: 'root',
            name: 'Administrator'
        },
    ],

    devices: [
//----------------------------Гостинная------------------------------------------
        {
            id: 'bd777170-a756-480c-beb9-164479808ace',
            name: 'Свет',
            room: 'Гостинная',
            type: 'devices.types.light',
            mqtt: [
                {
                    type: 'on',
                    set: '/devices/wb-mr6c_52/controls/K1/on',
                    stat: '/devices/wb-mr6c_52/controls/K1'
                },
            ],
            capabilities: [
                {
                    type: 'devices.capabilities.on_off',
                    retrievable: true,
                    state: {
                        instance: 'on',
                        value: true
                    }
                },
            ],
            device_info:
            {
                manufacturer: 'wirenboard',
                model: 'wb-mr6lv-i'
            }
        },

        {
            id: '244dcf20-9d57-4528-99ce-e07d95024864',
            name: 'Свет второй',
            room: 'Гостинная',
            type: 'devices.types.light',
            mqtt: [
                {
                    type: 'on',
                    set: '/devices/wb-mr6c_52/controls/K2/on',
                    stat: '/devices/wb-mr6c_52/controls/K2'
                },
            ],
            capabilities: [
                {
                    type: 'devices.capabilities.on_off',
                    retrievable: true,
                    state: {
                        instance: 'on',
                        value: true
                    }
                },
            ],
            device_info:
            {
                manufacturer: 'wirenboard',
                model: 'wb-mr6lv-i'
            }
        },

        {
            id: '4dfbd7fa-2934-4dd8-b35f-2e133aa92510',
            name: 'Бризер',
            room: 'Гостинная',
            type: 'devices.types.purifier',
            mqtt: [
                {
                    type: 'on',
                    set: '/devices/wb-msw-v3_61/controls/Play from ROM1/on',
                    stat: '/devices/wb-msw-v3_61/controls/Play from ROM1'
                }
            ],
            capabilities: [
                {
                    type: 'devices.capabilities.on_off',
                    retrievable: false,
                    state: {
                        instance: 'on',
                        value: true
                    }
                }
            ],
            device_info:
            {
                manufacturer: 'Tion',
                model: 'O2'
            }
        },

        {
            id: 'dd977af6-ee1b-4ed9-aba5-bd9fcabaf81d',
            name: 'Телевизор',
            room: 'Гостинная',
            type: 'devices.types.media_device.tv',
            mqtt: [
                {
                    type: 'on',
                    set: '/devices/wb-msw-v3_61/controls/Play from ROM4/on',
                    stat: '/devices/wwb-msw-v3_61/controls/Play from ROM4'
                },
            ],
            capabilities: [
                {
                    type: 'devices.capabilities.on_off',
                    retrievable: false,
                    state: {
                        instance: 'on',
                        value: true
                    }
                },
            ],
            device_info:
            {
                manufacturer: 'wirenboard',
                model: 'wb-msw-v3_61'
            }
        }, 
        {
            id: '6aed36b8-6e50-4552-9e55-b007aa60323e',
            name: 'Гостинная',
            room: 'Гостинная',
            type: 'devices.types.sensor',
            mqtt: [
                {
                    type: 'co2_level',
                    stat: '/devices/wb-msw-v3_61/controls/CO2'
                },
                {
                    type: 'humidity',
                    stat: '/devices/wb-msw-v3_61/controls/Humidity'
                },
                {
                    type: 'temperature',
                    stat: '/devices/wb-msw-v3_61/controls/Temperature'
                }
            ],
            capabilities: [
            ],
            properties: [
                {
                    type: 'devices.properties.float',
                    retrievable: true,
                    state: {
                        instance: 'co2_level',
                        value: 0
                    },
                    parameters: {
                        instance: 'co2_level',
                        unit: 'unit.ppm'
                    }
                },
                {
                    type: 'devices.properties.float',
                    retrievable: true,
                    state: {
                        instance: 'humidity',
                        value: 0
                    },
                    parameters: {
                        instance: 'humidity',
                        unit: 'unit.percent'
                    }
                },
                {
                    type: 'devices.properties.float',
                    retrievable: true,
                    state: {
                        instance: 'temperature',
                        value: 0
                    },
                    parameters: {
                        instance: 'temperature',
                        unit: 'unit.temperature.celsius'
                    }
                }
            ],
            device_info:
            {
                manufacturer: 'wirenboard',
                model: 'WB-MSW v.3'
            }
        },
        //----------------------------Кухня----------------------------------------------
        {
            id: 'b53a3690-4f86-41ac-91ba-52c6f4ede9b3',
            name: 'Свет',
            room: 'Кухня',
            type: 'devices.types.light',
            mqtt: [
                {
                    type: 'on',
                    set: '/devices/wb-mr6c_52/controls/K3/on',
                    stat: '/devices/wb-mr6c_52/controls/K3'
                },
            ],
            capabilities: [
                {
                    type: 'devices.capabilities.on_off',
                    retrievable: true,
                    state: {
                        instance: 'on',
                        value: true
                    }
                },
            ],
            device_info:
            {
                manufacturer: 'wirenboard',
                model: 'wb-mr6lv-i'
            }
        },

        {
            id: '13d5248e-69f7-4ab1-a88b-8e74eed7b96c',
            name: 'Свет над столом',
            room: 'Кухня',
            type: 'devices.types.light',
            mqtt: [
                {
                    type: 'on',
                    set: '/devices/wb-mr6c_52/controls/K4/on',
                    stat: '/devices/wb-mr6c_52/controls/K4'
                },
            ],
            capabilities: [
                {
                    type: 'devices.capabilities.on_off',
                    retrievable: true,
                    state: {
                        instance: 'on',
                        value: true
                    }
                },
            ],
            device_info:
            {
                manufacturer: 'wirenboard',
                model: 'wb-mr6lv-i'
            }
        },

        {
            id: 'b4a8edeb-9ddc-423c-9248-074ebfcb4cf5',
            name: 'Подсветка',
            room: 'Кухня',
            type: 'devices.types.light',
            mqtt: [
                {
                    type: 'on',
                    set: '/devices/hood/controls/Light/on',
                    stat: '/devices/hood/controls/Light'
                },
            ],
            capabilities: [
                {
                    type: 'devices.capabilities.on_off',
                    retrievable: true,
                    state: {
                        instance: 'on',
                        value: true
                    }
                },
            ],
            device_info:
            {
                manufacturer: 'wirenboard',
                model: 'wb-mr6lv-i'
            }
        },

        {
            id: '6d866077-7663-4262-9443-02cb87897aa4',
            name: 'Вытяжка',
            room: 'Кухня',
            type: 'devices.types.purifier',
            mqtt: [
                {
                    type: 'on',
                    set: '/devices/hood/controls/OnOff/on',
                    stat: '/devices/hood/controls/OnOff'
                },
                {
                    type: 'fan_speed',
                    set: '/devices/hood/controls/ModeText',
                    stat: '/devices/hood/controls/ModeText'
                },
            ],
            capabilities: [
                {
                    type: 'devices.capabilities.on_off',
                    retrievable: true,
                    state: {
                        instance: 'on',
                        value: true
                    }
                },
                {
                    type: 'devices.capabilities.mode',
                    retrievable: true,
                    parameters: {
                        instance: 'fan_speed',
                        modes: [
                            {
                                value: 'low'
                            },
                            {
                                value: 'medium'
                            },
                            {
                                value: 'high'
                            },
                        ],
                        ordered: true,
                    },
                    state: {
                        instance: 'fan_speed',
                        value: 'auto',
                    },
                }
            ],
            device_info:
            {
                manufacturer: 'doroganovv',
                model: 'esp8266'
            }
        },

//----------------------------Спальня--------------------------------------------
        {
            id: 'ab406963-8b30-484f-91f9-0300ed6b3a59',
            name: 'Свет',
            room: 'Спальня',
            type: 'devices.types.light',
            mqtt: [
                {
                    type: 'on',
                    set: '/devices/wb-mr6c_107/controls/K1/on',
                    stat: '/devices/wb-mr6c_107/controls/K1'
                },
            ],
            capabilities: [
                {
                    type: 'devices.capabilities.on_off',
                    retrievable: true,
                    state: {
                        instance: 'on',
                        value: true
                    }
                },
            ],
            device_info:
            {
                manufacturer: 'wirenboard',
                model: 'wb-mr6lv-i'
            }

        },

        {
            id: '1008ac91-82b3-4922-9527-500dcdab1d41',
            name: 'Подсветка',
            room: 'Спальня',
            type: 'devices.types.light',
            mqtt: [
                {
                    type: 'on',
                    set: '/devices/wb-mr6c_107/controls/K2/on',
                    stat: '/devices/wb-mr6c_107/controls/K2'
                },
            ],
            capabilities: [
                {
                    type: 'devices.capabilities.on_off',
                    retrievable: true,
                    state: {
                        instance: 'on',
                        value: true
                    }
                },
            ],
            device_info:
            {
                manufacturer: 'wirenboard',
                model: 'wb-mr6lv-i'
            }

        },
//----------------------------Гостевая-------------------------------------------
        {
            id: '2f5290e1-5cfb-44ff-88f5-e7b90bf54f0a',
            name: 'Свет',
            room: 'Гостевая',
            type: 'devices.types.light',
            mqtt: [
                {
                    type: 'on',
                    set: '/devices/wb-mr6c_107/controls/K3/on',
                    stat: '/devices/wb-mr6c_107/controls/K3'
                },
            ],
            capabilities: [
                {
                    type: 'devices.capabilities.on_off',
                    retrievable: true,
                    state: {
                        instance: 'on',
                        value: true
                    }
                },
            ],
            device_info:
            {
                manufacturer: 'wirenboard',
                model: 'wb-mr6lv-i'
            }

        },

        {
            id: 'ed407a8c-cc9f-4908-a5e4-b3610c689000',
            name: 'Свет два',
            room: 'Гостевая',
            type: 'devices.types.light',
            mqtt: [
                {
                    type: 'on',
                    set: '/devices/wb-mr6c_107/controls/K4/on',
                    stat: '/devices/wb-mr6c_107/controls/K4'
                },
            ],
            capabilities: [
                {
                    type: 'devices.capabilities.on_off',
                    retrievable: true,
                    state: {
                        instance: 'on',
                        value: true
                    }
                },
            ],
            device_info:
            {
                manufacturer: 'wirenboard',
                model: 'wb-mr6lv-i'
            }

        },
//----------------------------Ванна----------------------------------------------
        {
            id: 'f3966a5d-512a-4497-aee1-87b0b8238eba',
            name: 'Свет',
            room: 'Ванна',
            type: 'devices.types.light',
            mqtt: [
                {
                    type: 'on',
                    set: '/devices/wb-mr6c_107/controls/K5/on',
                    stat: '/devices/wb-mr6c_107/controls/K5'
                },
            ],
            capabilities: [
                {
                    type: 'devices.capabilities.on_off',
                    retrievable: true,
                    state: {
                        instance: 'on',
                        value: true
                    }
                },
            ],
            device_info:
            {
                manufacturer: 'wirenboard',
                model: 'wb-mr6lv-i'
            }
        },

        {
            id: 'e3a6d145-4956-4468-bd7d-7c82cbb016b7',
            name: 'Подсветка',
            room: 'Ванна',
            type: 'devices.types.light',
            mqtt: [
                {
                    type: 'on',
                    set: '/devices/wb-mr6c_107/controls/K6/on',
                    stat: '/devices/wb-mr6c_107/controls/K6'
                },
            ],
            capabilities: [
                {
                    type: 'devices.capabilities.on_off',
                    retrievable: true,
                    state: {
                        instance: 'on',
                        value: true
                    }
                },
            ],
            device_info:
            {
                manufacturer: 'wirenboard',
                model: 'wb-mr6lv-i'
            }

        },

        {
            id: '3ecba18f-b352-4841-86bd-2445cf76c580',
            name: 'Вода',
            room: 'Ванна',
            type: 'devices.types.switch',
            mqtt: [
                {
                    type: 'on',
                    set: '/devices/wb-mwac_20/controls/K1/on',
                    stat: '/devices/wb-mwac_20/controls/K1'
                }
            ],
            capabilities: [
                {
                    type: 'devices.capabilities.on_off',
                    retrievable: true,
                    state: {
                        instance: 'on',
                        value: true
                    }
                },
            ],
            device_info:
            {
                manufacturer: 'wirenboard',
                model: 'wb-mr6lv-i'
            }
        },
//----------------------------Коридор--------------------------------------------
        {
            id: '2156fd0d-974a-41e6-abe5-6f44355905db',
            name: 'Свет',
            room: 'Коридор',
            type: 'devices.types.light',
            mqtt: [
                {
                    type: 'on',
                    set: '/devices/wb-mr6c_52/controls/K6/on',
                    stat: '/devices/wb-mr6c_52/controls/K6'
                }
            ],
            capabilities: [
                {
                    type: 'devices.capabilities.on_off',
                    retrievable: true,
                    state: {
                        instance: 'on',
                        value: true
                    }
                }
            ],
            device_info:
            {
                manufacturer: 'wirenboard',
                model: 'wb-mr6lv-i'
            }
        },
        {
            id: 'f368fbff-7115-4f5f-ad79-7d0ce597308d',
            name: 'Домофон',
            room: 'Коридор',
            type: 'devices.types.openable',
            mqtt: [
                {
                    type: 'on',
                    set: '/devices/intercom/controls/AcceptAndOpen/on'
                }
            ],
            capabilities: [
                {
                    type: 'devices.capabilities.on_off',
                    retrievable: false,
                    state: {
                        instance: 'on',
                        value: true
                    }
                }
            ],
            device_info:
            {
                manufacturer: 'wirenboard',
                model: 'wb-mr6lv-i'
            }
        }, 
        {
            id: 'f681e844-d882-44c7-a020-61f4d35026a5',
            name: 'Электросчётчик',
            room: 'Коридор',
            type: 'devices.types.sensor',
            mqtt: [
                {
                    type: 'voltage',
                    stat: '/devices/milur105_255/controls/Voltage'
                },
                {
                    type: 'amperage',
                    stat: '/devices/milur105_255/controls/Current'
                },
                {
                    type: 'power',
                    stat: '/devices/milur105_255/controls/Active power'
                }
            ],
            capabilities: [
            ],
            properties: [
                {
                    type: 'devices.properties.float',
                    retrievable: true,
                    state: {
                        instance: 'voltage',
                        value: 0
                    },
                    parameters: {
                        instance: 'voltage',
                        unit: 'unit.volt'
                    }
                },
                {
                    type: 'devices.properties.float',
                    retrievable: true,
                    state: {
                        instance: 'amperage',
                        value: 0
                    },
                    parameters: {
                        instance: 'amperage',
                        unit: 'unit.ampere'
                    }
                },
                {
                    type: 'devices.properties.float',
                    retrievable: true,
                    state: {
                        instance: 'power',
                        value: 0
                    },
                    parameters: {
                        instance: 'power',
                        unit: 'unit.watt'
                    }
                }
            ],
            device_info:
            {
                manufacturer: 'wirenboard',
                model: 'WB-MSW v.3'
            }
        },
        //----------------------------Метеостанция на улице--------------------------------------------
        {
            id: '6aed36b8-6e50-4552-9e55-b007aa60747a',
            name: 'Метеостанция',
            room: 'Улица',
            type: 'devices.types.sensor',
            mqtt: [
                {
                    type: 'temperature',
                    stat: '/devices/yandex/meteo/temp'
                },
                {
                    type: 'humidity',
                    stat: '/devices/yandex/meteo/humidity'
                },
                {
                    type: 'pressure',
                    stat: '/devices/yandex/meteo/pressure'
                }
            ],
            capabilities: [
            ],
            properties: [
                {
                    type: 'devices.properties.float',
                    retrievable: true,
                    state: {
                        instance: 'temperature',
                        value: 0
                    },
                    parameters: {
                        instance: 'temperature',
                        unit: 'unit.temperature.celsius'
                    }
                },
                {
                    type: 'devices.properties.float',
                    retrievable: true,
                    state: {
                        instance: 'humidity',
                        value: 0
                    },
                    parameters: {
                        instance: 'humidity',
                        unit: 'unit.percent'
                    }
                },
                {
                    type: 'devices.properties.float',
                    retrievable: true,
                    state: {
                        instance: 'pressure',
                        value: 500
                    },
                    parameters: {
                        instance: 'pressure',
                        unit: 'unit.pressure.mmhg'
                    }
                }
            ],
            device_info:
            {
                manufacturer: 'Remadmin',
                model: 'Remadmin Meteo V1'
            }
        },
//----------------------------Новое--------------------------------------------        
    ]
}
