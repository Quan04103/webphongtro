import Landmark81 from '../../src/assets/Landmark81.jpg'

export const path = {
    HOME: '/*',
    LOGIN: '/login',
    QC: '/qc',
    PROFILE: '/profile',
    TEST: '/test',
    LIENHE: '/lienhe',
    CREATE_POST: '/createpost',
    PAY_POST: '/paypost',
    DETAILS: '/details',
    SEARCH: 'search',
    SEARCHTEST: 'searchtest'

    
}
export const textHomePage = {
    HOME_TITLE: 'Kênh thông tin Phòng trọ số 2 Việt Nam',
    HOME_DISCRIPTION: 'Kênh thông tin Phòng Trọ số 2 Việt Nam - Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn hộ, hiệu quả nhanh chống và cực kỳ hữu ích với số lượng tin đăng và lượt truy cập lớn.'
}

export const locationPhongtro = [
    {
        name: 'Phòng trọ Hồ Chí Minh',
        image: Landmark81,
        id: 'hcm',
        query: {
            categoryCode: 'CTPT',
            address:'Thành phố Hồ Chí Minh'
        }
    },
    {
        name: 'Phòng trọ Hà Nội',
        image: Landmark81,
        id: 'hn',
        query: {
            categoryCode: 'CTPT',
            address:'Thành phố Hà Nội'
        }
    },
    {
        name: 'Phòng trọ Đà Nẵng',
        image: Landmark81,
        id: 'dn',
        query: {
            categoryCode: 'CTPT',
            address:'Thành phố Đà Nẵng'
        }
    },
]

export const locationCanho = [
    {
        name: 'Căn hộ Hồ Chí Minh',
        image: Landmark81,
        id: 'hcm',
        query: {
            categoryCode: 'CTCH',
            address:'Thành phố Hồ Chí Minh'
        }
    },
    {
        name: 'Căn hộ Hà Nội',
        image: Landmark81,
        id: 'hn',
        query: {
            categoryCode: 'CTCH',
            address:'Thành phố Hà Nội'
        }
    },
    {
        name: 'Căn hộ Đà Nẵng',
        image: Landmark81,
        id: 'dn',
        query: {
            categoryCode: 'CTCH',
            address:'Thành phố Đà Nẵng'
        }
    },
]

export const locationNha = [
    {
        name: 'Nhà Hồ Chí Minh',
        image: Landmark81,
        id: 'hcm',
        query: {
            categoryCode: 'CTN',
            address:'Thành phố Hồ Chí Minh'
        }
    },
    {
        name: 'Nhà Hà Nội',
        image: Landmark81,
        id: 'hn',
        query: {
            categoryCode: 'CTN',
            address:'Thành phố Hà Nội'
        }
    },
    {
        name: 'Nhà Đà Nẵng',
        image: Landmark81,
        id: 'dn',
        query: {
            categoryCode: 'CTN',
            address:'Thành phố Đà Nẵng'
        }
    },
]