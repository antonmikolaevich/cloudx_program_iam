const {getGroupByUserName, getPolicyByGroupName, getPolicyByRole, getPolicyDetails } = require('../functions/mainMethods');
const {areEqualActualAndExpectedValue, getValue} = require('../functions/common');
const { expectedConfig, expectedPolicies, policiesArn } = require('../utils/const');
const { expect } = require('chai');
const { listUsersAndGroups, listGroupsAndPolicies, listRolesAndPolicies, listPolicies } = require('../utils/testData');


describe("IAM Hometask", async function () {
    describe('CXQA-IAM-01 Policies and Versions', () => {
        listPolicies.forEach(userData => {
            it(`Verify that ${userData.policyName} policy has expected version`, async function(){
                const actualPolicyVersion = await getPolicyDetails(policiesArn[`${userData.policyName}`], 'v1');
                const expectedActionAllowed = expectedPolicies[`${userData.policyName}`].ActionsAllowed;
                const expectedResources = expectedPolicies[`${userData.policyName}`].Resources;
                const expectedEffect = expectedPolicies[`${userData.policyName}`].Effect;
                let actualActionValue = getValue(actualPolicyVersion, 'Action');
                let actualResourcesValue = getValue(actualPolicyVersion,'Resource');
                let actualEffectValue = getValue(actualPolicyVersion,'Effect');
                expect(await areEqualActualAndExpectedValue(expectedActionAllowed, actualActionValue), `actions allowed are not expected into ${userData.policyName} policy`).to.be.true;
                expect(await areEqualActualAndExpectedValue(expectedResources, actualResourcesValue), `resources are not expected into ${userData.policyName} policy`).to.be.true;
                expect(await areEqualActualAndExpectedValue(expectedEffect, actualEffectValue), `effect are not expected into ${userData.policyName} policy`).to.be.true;
            })
        })
    })

    describe('CXQA-IAM-02 Roles and Polices', () => {
        listRolesAndPolicies.forEach(userData => {
            it(`Verify that ${userData.roleName} role has the ${userData.policyName} policy`, async function(){
                const actualPolicy = await getPolicyByRole(`${userData.roleName}`);
                const expectedPolicy = expectedConfig.rolesAndPolicies[`${userData.roleName}`];
                expect(expectedPolicy, `${userData.roleName} role does not have the ${userData.policyName} policy`).to.equal(actualPolicy);
            })
        })
    })

    describe('CXQA-IAM-03 Group and Polices', () => {
        listGroupsAndPolicies.forEach(userData => {
            it(`Verify that ${userData.groupName} group has the ${userData.policyName} policy`, async function(){
                const actualPolicy = await getPolicyByGroupName(`${userData.groupName}`);
                const expectedPolicy = expectedConfig.groupsAndPolicies[`${userData.groupName}`];
                expect(expectedPolicy, `${userData.groupName} group does not have the ${userData.policyName} policy`).to.equal(actualPolicy);
            })
        })
    })

    describe('CXQA-IAM-04 Users and Groups', () => {
        listUsersAndGroups.forEach(userData => {
            it(`Verify that ${userData.userName} user has the ${userData.group} group`, async function(){
                const actualPolicy = await getGroupByUserName(`${userData.userName}`);
                const expectedPolicy = expectedConfig.usersAndGroups[`${userData.userName}`];
                expect(expectedPolicy, `${userData.userName} user does not have the ${userData.group} group`).to.equal(actualPolicy);
            })
        })
    })

})