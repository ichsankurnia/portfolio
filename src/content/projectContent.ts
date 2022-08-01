import content from "."

const imgPath = `${process.env.PUBLIC_URL}/assets/project`

const projectContent = [
    {
        title: 'PT Nutech Integrasi',
        desc: content.work.desc,
        projects: [
            {
                img_thumb: imgPath + '/myg/1.png',
                title: 'Vending Machine MyGraPARI Telkomsel',
                short_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                long_desc: '',
                tools_tech: ['C#', 'ReactJS', 'WebSocket'],
                private: true
            },
            {
                img_thumb: imgPath + '/railink/2.png',
                title: 'Vending Machine PT Railink (Kereta Bandara)',
                short_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                long_desc: '',
                tools_tech: ['ReactJS', 'Redux'],
                private: true
            },
            {
                img_thumb: imgPath + '/log/1.png',
                title: 'Log Trouble Dashboard',
                short_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                long_desc: '',
                tools_tech: ['NodeJS', 'Express', 'Socket-IO', 'PostgreSQL', 'ReactJS', 'Redux', 'Ant Design', 'CMS'],
                private: true
            },
            {
                img_thumb: imgPath + '/pwa_wheater_app.png',
                title: 'Vending Machine Bus Management System (BMS) Angkasa Pura II (AP2)',
                short_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                long_desc: '',
                tools_tech: ['C#', 'WPF'],
                private: true
            },
            {
                img_thumb: imgPath + '/myhce/1.jpg',
                title: 'Mobile App Host-base Card Emulation (HCE)',
                short_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                long_desc: '',
                tools_tech: ['Android', 'Kotlin', 'NFC'],
                private: true
            }
        ]
    },
    {
        title: 'Part Time / Freelance',
        desc: content.work.desc,
        projects: [
            {
                img_thumb: imgPath + '/fms.png',
                title: 'Agroobot - Farm Management System (FMS)',
                short_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                long_desc: '',
                tools_tech: ['ReactJS', 'Context-API', 'Redux', 'Typescript', 'TailwindCSS', 'CMS'],
                private: true
            },
            {
                img_thumb: imgPath + '/efaktur.png',
                title: 'Electronic System Administration Pajak (eFaktur and File Manager Apps)',
                short_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                long_desc: '',
                tools_tech: ['ReactJS', 'Context-API', 'Recoil', 'Typescript', 'TailwindCSS', 'File-Manager', 'CMS'],
                private: true
            },
            {
                img_thumb: imgPath + '/molja.png',
                title: 'Molja Furniture Web Admin',
                short_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                long_desc: '',
                tools_tech: ['ReactJS', 'Typescript', 'TailwindCSS', 'CMS'],
                private: true,
            },
            {
                img_thumb: imgPath + '/mou.png',
                title: 'Memorandum of Understanding (MoU) Builder and Sign',
                short_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                long_desc: '',
                tools_tech: ['ReactJS', 'Redux', 'TailwindCSS', 'CMS', 'Syncfusion'],
                private: true
            },
            {
                img_thumb: imgPath + '/tiestani.png',
                title: 'Tiestani Apps',
                short_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                long_desc: '',
                tools_tech: ['ReactJS', 'Redux', 'TailwindCSS', 'CMS'],
                private: true
            },
            {
                img_thumb: imgPath + '/agroobot.png',
                title: 'Agroobot Web Apps',
                short_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                long_desc: '',
                tools_tech: ['ReactJS', 'Redux', 'TailwindCSS', 'CMS'],
                private: true
            },
            {
                img_thumb: imgPath + '/pwa_wheater_app.png',
                title: 'Human Resource Information System (HRIS)',
                short_desc: 'An employee attendance Apps for PT Anugerah Indonesia Raya',
                long_desc: '',
                tools_tech: ['NodeJS', 'Express', 'Sequelize', 'PostgreSQL'],
                private: true,
                list_img: [
                    {
                        img: imgPath + '/pwa_wheater_app.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/pwa_wheater_app2.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    }
                ]
            },
            {
                img_thumb: imgPath + '/repind-cms/17.png',
                title: 'Repair Indonesia',
                short_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                long_desc: '',
                tools_tech: ['NodeJS', 'Express', 'Sequelize', 'PostgreSQL', 'ReactJS', 'Reactstrap', 'Dashboard', 'CMS'],
                list_img: [
                    {
                        img: imgPath + '/repind-cms/1.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/repind-cms/2.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/repind-cms/3.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/repind-cms/4.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/repind-cms/5.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/repind-cms/6.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/repind-cms/7.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/repind-cms/8.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/repind-cms/9.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/repind-cms/10.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/repind-cms/11.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/repind-cms/12.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/repind-cms/13.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/repind-cms/14.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/repind-cms/15.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/repind-cms/16.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/repind-cms/17.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/repind-cms/18.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/repind-cms/19.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/repind-cms/20.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/repind-cms/21.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/repind-cms/22.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    }
                ]
            },
            {
                img_thumb: imgPath + '/bams/1.jpg',
                title: 'Bridge Aeroelastic Monitoring System',
                short_desc: 'Project data process development and monitoring on Suramadu Bridge with BPPT (BBTA3)',
                long_desc: '',
                tools_tech: ['Python', 'MQTT', 'Matplotlib', 'Visualization'],
                list_img: [
                    {
                        img: imgPath + '/bams/1.jpg',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/bams/2.jpg',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/bams/3.jpg',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/bams/4.jpg',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/bams/5.jpg',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/bams/6.jpg',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/bams/7.jpg',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                ]
            }
        ]
    },
    {
        title: 'Internship',
        desc: content.work.desc,
        projects: [
            {
                img_thumb: imgPath + '/pkl/1.png',
                title: 'GUI Moxa ioLogik E1200 Series',
                short_desc: 'Moxa ioLogik E1200 Device integrated with Graphical User Interface to use in Production Line PT Mecoindo Itron',
                long_desc: '',
                tools_tech: ['C#', 'Moxa', 'TCPIP'],
                // private: true,
                list_img: [
                    {
                        img: imgPath + '/pkl/1.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/pkl/2.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/pkl/3.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/pkl/4.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/pkl/5.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/pkl/6.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/pkl/7.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/pkl/8.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    }
                ]
            }
        ]
    },
    {
        title: 'Other Project',
        desc: content.work.desc,
        projects: [
            {
                img_thumb: imgPath + '/google-calendar.png',
                title: 'Google Calendar Clone',
                short_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                long_desc: '',
                tools_tech: ['ReactJS', 'Context-API', 'TailwindCSS'],
                private: true
            },
            {
                img_thumb: imgPath + '/wa-mern/8.png',
                title: 'Realtime Chat Apps',
                short_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                long_desc: '',
                tools_tech: ['MongoDB', 'Express', 'NodeJS', 'ReactJS', 'Redux', 'Material-UI', 'Socket-IO'],
                list_img: [
                    {
                        img: imgPath + '/wa-mern/1.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/wa-mern/2.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/wa-mern/3.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/wa-mern/4.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/wa-mern/5.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/wa-mern/6.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/wa-mern/7.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/wa-mern/8.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    }
                ]
            },
            {
                img_thumb: imgPath + '/tensorflow/3.png',
                title: 'Tensorflow Build a Model Object Detection with Python',
                short_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                long_desc: '',
                tools_tech: ['Tensorflow', 'Object-Detection', 'Deep-Learning', 'Python', 'OpenCV'],
                list_img: [
                    {
                        img: imgPath + '/tensorflow/1.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/tensorflow/2.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/tensorflow/3.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    }
                ]
            },
            {
                img_thumb: imgPath + '/tensorflowjs/5.png',
                title: 'Realtime Object Detection with TensorflowJS and ReactJS',
                short_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                long_desc: '',
                tools_tech: ['TensorflowJS', 'Object-Detection', 'Deep-Learning', 'ReactJS'],
                list_img: [
                    {
                        img: imgPath + '/tensorflowjs/1.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/tensorflowjs/2.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/tensorflowjs/3.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/tensorflowjs/4.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/tensorflowjs/5.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/tensorflowjs/6.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/tensorflowjs/7.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/tensorflowjs/8.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    }
                ]
            },
            {
                img_thumb: imgPath + '/pwa_wheater_app.png',
                title: 'PWA Wheater App',
                short_desc: 'Progressive Web App Wheater Application using ReactJS and Service Worker',
                long_desc: '',
                tools_tech: ['ReactJS', 'PWA', 'Service Worker'],
                list_img: [
                    {
                        img: imgPath + '/pwa_wheater_app.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        img: imgPath + '/pwa_wheater_app2.png',
                        img_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    }
                ]
            },
        ]
    }
]

export default projectContent