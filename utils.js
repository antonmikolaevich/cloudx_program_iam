const AWS = require('aws-sdk');

const expectedConfig = {
    rolesAndPolicies: {
        FullAccessRoleEC2: 'FullAccessPolicyEC2',
        FullAccessRoleS3: 'FullAccessPolicyS3',
        ReadAccessRoleS3: 'ReadAccessPolicyS3'
    },
    groupsAndPolicies: {
        FullAccessGroupEC2: 'FullAccessPolicyEC2',
        FullAccessGroupS3: 'FullAccessPolicyS3',
        ReadAccessGroupS3: 'ReadAccessPolicyS3'
    },
    usersAndGroups: {
        FullAccessUserEC2: 'FullAccessGroupEC2',
        FullAccessUserS3: 'FullAccessGroupS3',
        ReadAccessUserS3: 'ReadAccessGroupS3'
    }
};

const expectedPolicies = {
    FullAccessPolicyEC2:{
        ActionsAllowed: 'ec2:*',
        Resources: 'All',
        Effect: 'Allow'
    },
    FullAccessPolicyS3: {
        ActionsAllowed: 's3:*',
        Resources: 'All',
        Effect: 'Allow'
    },
    ReadAccessPolicyS3: {
        ActionsAllowed: 's3:Describe*, s3:Get*, s3:List*',
        Resources: 'All',
        Effect: 'Allow'
    }
};

const policiesArn = {
    FullAccessPolicyEC2: 'arn:aws:iam::891612554073:policy/FullAccessPolicyEC2',
    FullAccessPolicyS3: 'arn:aws:iam::891612554073:policy/FullAccessPolicyS3',
    ReadAccessPolicyS3: 'arn:aws:iam::891612554073:policy/ReadAccessPolicyS3'
}

module.exports = {
    expectedConfig,
    expectedPolicies,
    policiesArn
}