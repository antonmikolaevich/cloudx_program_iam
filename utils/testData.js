const listUsersAndGroups = [
    {"userName": "FullAccessUserEC2", "groupName": "FullAccessGroupEC2"},
    {"userName": "FullAccessUserS3", "groupName": "FullAccessGroupS3"},
    {"userName": "ReadAccessUserS3", "groupName": "ReadAccessGroupS3"}
]


const listGroupsAndPolicies = [
    {"groupName": "FullAccessGroupEC2", "policyName": "FullAccessPolicyEC2"},
    {"groupName": "FullAccessGroupS3", "policyName": "FullAccessPolicyS3"},
    {"groupName": "ReadAccessGroupS3", "policyName": "ReadAccessPolicyS3"}
]

const listRolesAndPolicies = [
    {"roleName": "FullAccessRoleEC2", "policyName": "FullAccessPolicyEC2"},
    {"roleName": "FullAccessRoleS3", "policyName": "FullAccessPolicyS3"},
    {"roleName": "ReadAccessRoleS3", "policyName": "ReadAccessPolicyS3"}
]

const listPolicies = [
    {"policyName": "FullAccessPolicyEC2"},
    {"policyName": "FullAccessPolicyS3"},
    {"policyName": "ReadAccessPolicyS3"}
]




module.exports = {
    listUsersAndGroups,
    listGroupsAndPolicies,
    listRolesAndPolicies,
    listPolicies
}