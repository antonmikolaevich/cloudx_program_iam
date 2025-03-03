const AWS = require('aws-sdk');
require('dotenv').config();
const iam = new AWS.IAM();
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});


const getGroupByUserName = async (username) => {
    const params = {
        UserName: username
    };

    try {
        const data = await iam.listGroupsForUser(params).promise();
        const groupNames = data.Groups.map(group => group.GroupName);
        if (groupNames.length === 1){
            return groupNames[0];
        } else {
        return groupNames;
        }
    } catch (err) {
        // Can rethrow the error or handle it depending on your needs
        throw new Error(err.message);
    }
}

const getPolicyByGroupName = async (groupName) => {
    const params = {
        GroupName: groupName
    };

    try {
        const data = await iam.listAttachedGroupPolicies(params).promise();
        const policyNames = data.AttachedPolicies.map(policy => policy.PolicyName);
        if (policyNames.length === 1){
            return policyNames[0];
        } else {
        return policyNames;
        }
    } catch (err) {
        // Can rethrow the error or handle it depending on your needs
        throw new Error(err.message);
    }
};


const getPolicyByRole = async (roleName) => {
    const params = {
        RoleName: roleName
    };

    try {
        const data = await iam.listAttachedRolePolicies(params).promise();
        const policyNames = data.AttachedPolicies.map(policy => policy.PolicyName);
        if (policyNames.length === 1){
            return policyNames[0];
        } else {
        return policyNames;
        }
    } catch (err) {
        throw new Error(err.message);
    }
};

const getPolicyDetails = async (policyArn, versionId) => {
    const params = {
        PolicyArn: policyArn,
        VersionId: versionId
    };

    try {
        const data = await iam.getPolicyVersion(params).promise();
        const policyDocument = await JSON.parse(decodeURIComponent(data.PolicyVersion.Document));
        return policyDocument.Statement;
    } catch (err) {
        throw new Error(err.message);
    }
};

module.exports = {
    getGroupByUserName,
    getPolicyByGroupName,
    getPolicyByRole,
    getPolicyDetails
}
