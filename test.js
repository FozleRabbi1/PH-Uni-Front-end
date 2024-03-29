// const arr = [1, 2, 3, 4]
// const result = arr.reduce((acc, item) => {
//     // return acc + item
//     acc.push(acc + item)
//     return acc
// }, [])
// console.log(result);




export const adminPaths2 = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: "ADMIN_DASHBOARD",
    },
    {
        name: "User managment",
        children: [
            {
                name: "Create Admin",
                path: "create-admin",
                element: "CREATE_ADMIN",
            },
            {
                name: "Create Faculty",
                path: "create-faculty",
                element: "CREATE_FACULTY",
            },
            {
                name: "Create Student",
                path: "create-student",
                element: "CREATE_STUDENT",
            },
        ],
    },
];

const newArray = adminPaths2.reduce((acc, item) => {
    if (item.path && item.name) {
        acc.push({
            key: item.name,
            label: "NAV_LINK"
        })
    }
    if (item.children) {
        acc.push({
            key: item.name,
            label: item.name,
            children: item.children.map(child => ({
                key: child.name,
                label: "navLink"
            }))
        })
    }
    return acc
}, [])
// console.log(JSON.stringify(newArray));


// const newArray = adminPaths2.reduce((acc, item) => {
//     if (item.path && item.element) {
//         acc.push({
//             path: item.path,
//             element: item.element
//         })
//     }
//     if (item.children) {
//         item.children.forEach(child => {
//             acc.push({
//                 path: child.path,
//                 element: child.element
//             })
//         })
//     }
//     return acc
// }, [])
// console.log(newArray);

// newArray[1].children.map(i => console.log(i.name))




const facultyPath = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: "<FacultyDashboard></FacultyDashboard>",
    },
    {
        name: "Offerd Course",
        path: "offerd-course",
        element: "<OfferdCourse></OfferdCourse>",
    },
];


const facultySideBarItems = facultyPath.reduce((acc, item) => {
    if (item.name && item.path) {
        acc.push({
            key: item.name,
            label: item.path
        })
    }
    return acc
}, [])

console.log(facultySideBarItems);