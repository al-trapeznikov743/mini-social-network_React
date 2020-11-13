if (props.users.length === 0) {
    props.setUsers(
        [
            {
                id: 1,
                photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dmitry_Medvedev_govru_official_photo_2.jpg/1200px-Dmitry_Medvedev_govru_official_photo_2.jpg',
                followed: true,
                fullName: 'Dimon',
                status: 'Never look back',
                location: {city: 'Moskow', country: 'Russia'}
            },
            {
                id: 2,
                photoURL: 'https://cdn23.img.ria.ru/images/07e4/0a/10/1580069850_0:291:3072:2019_1920x0_80_0_0_1fb81621f28adba144a5d9af8d61ab7e.jpg',
                followed: true,
                fullName: 'Sveta',
                status: 'Make love not war',
                location: {city: 'Ufa', country: 'Russia'}
            },
            {
                id: 3,
                photoURL: 'https://static.mk.ru/upload/entities/2020/11/05/12/articles/detailPicture/ce/c5/72/0a/9646efae17d2f96acb2a10b5d02f7377.jpg',
                followed: false,
                fullName: 'Kent',
                status: 'Every bullet has its billet',
                location: {city: 'Tver', country: 'Russia'}
            },
            {
                id: 4,
                photoURL: 'https://sun9-39.userapi.com/impf/c855324/v855324524/11d207/FWtYcYcdIX8.jpg?size=400x0&quality=90&crop=339,83,515,515&sign=f61bef81f25db83905e90450402ac0d5&ava=1',
                followed: false,
                fullName: 'Denchik',
                status: 'If you can dream it, you can do it',
                location: {city: 'Kiev', country: 'Ukraine'}
            }
        ]
    )
}