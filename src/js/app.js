export let healthColor;
export let user;
export let userList = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 }
]

export function showHealth(user) {
    if (user.health > 50) {
        healthColor = 'green';
        return 'healthy';
    } else if (user.health >= 15 && user.health <= 50) {
        healthColor = 'yellow';
        return 'wounded';
    } else {
        healthColor = 'red';
        return 'critical';
    }
}

export function sortUsers(userList) {
    return userList.sort((a, b) => a.health - b.health)
}
