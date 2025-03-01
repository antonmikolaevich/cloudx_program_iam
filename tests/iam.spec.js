const {getGroupByUserName, getPolicyByGroupName, getPolicyByRole, getPolicyDetails } = require('../functions');
const {areEqualActualAndExpectedValue, getValue} = require('../commonFunction');
const { expectedConfig, expectedPolicies, policiesArn } = require('../utils');
const { expect } = require('chai');


describe("IAM Hometask", async function () {
    describe('CXQA-IAM-01 Policies and Versions', () => {
        it("Verify that FullAccessPolicyEC2 policy has expected version", async function () {
        const actualPolicyVersion = await getPolicyDetails(policiesArn.FullAccessPolicyEC2, 'v1');
        const expectedActionAllowed = expectedPolicies.FullAccessPolicyEC2.ActionsAllowed;
        const expectedResources = expectedPolicies.FullAccessPolicyEC2.Resources;
        const expectedEffect = expectedPolicies.FullAccessPolicyEC2.Effect;
        let actualActionValue = getValue(actualPolicyVersion, 'Action');
        let actualResourcesValue = getValue(actualPolicyVersion,'Resource');
        let actualEffectValue = getValue(actualPolicyVersion,'Effect');
        expect(await areEqualActualAndExpectedValue(expectedActionAllowed, actualActionValue), 'actions allowed are not expected').to.be.true;
        expect(await areEqualActualAndExpectedValue(expectedResources, actualResourcesValue), 'resources are not expected').to.be.true;
        expect(await areEqualActualAndExpectedValue(expectedEffect, actualEffectValue), 'effect are not expected').to.be.true;
        })

        it("Verify that FullAccessPolicyS3 policy has expected version", async function () {
            const actualPolicyVersion = await getPolicyDetails(policiesArn.FullAccessPolicyS3, 'v1');
            const expectedActionAllowed = expectedPolicies.FullAccessPolicyS3.ActionsAllowed;
            const expectedResources = expectedPolicies.FullAccessPolicyS3.Resources;
            const expectedEffect = expectedPolicies.FullAccessPolicyS3.Effect;
            let actualActionValue = getValue(actualPolicyVersion, 'Action');
            let actualResourcesValue = getValue(actualPolicyVersion,'Resource');
            let actualEffectValue = getValue(actualPolicyVersion,'Effect');
            expect(await areEqualActualAndExpectedValue(expectedActionAllowed, actualActionValue), 'actions allowed are not expected').to.be.true;
            expect(await areEqualActualAndExpectedValue(expectedResources, actualResourcesValue), 'resources are not expected').to.be.true;
            expect(await areEqualActualAndExpectedValue(expectedEffect, actualEffectValue), 'effect are not expected').to.be.true;
        })

        it("Verify that ReadAccessPolicyS3 policy has expected version", async function () {
            const actualPolicyVersion = await getPolicyDetails(policiesArn.ReadAccessPolicyS3, 'v1');
            const expectedActionAllowed = expectedPolicies.ReadAccessPolicyS3.ActionsAllowed;
            const expectedResources = expectedPolicies.ReadAccessPolicyS3.Resources;
            const expectedEffect = expectedPolicies.ReadAccessPolicyS3.Effect;
            let actualActionValue = getValue(actualPolicyVersion, 'Action');
            let actualResourcesValue = getValue(actualPolicyVersion,'Resource');
            let actualEffectValue = getValue(actualPolicyVersion,'Effect');
            expect(await areEqualActualAndExpectedValue(expectedActionAllowed, actualActionValue), 'actions allowed are not expected').to.be.true;
            expect(await areEqualActualAndExpectedValue(expectedResources, actualResourcesValue), 'resources are not expected').to.be.true;
            expect(await areEqualActualAndExpectedValue(expectedEffect, actualEffectValue), 'effect are not expected').to.be.true;
        })
    })

    describe('CXQA-IAM-02 Roles and Polices', () => {
        it("Verify that FullAccessRoleEC2 role has the FullAccessPolicyEC2 policy", async function () {
        const actualPolicy = await getPolicyByRole('FullAccessRoleEC2');
        const expectedPolicy = expectedConfig.rolesAndPolicies.FullAccessRoleEC2;
        expect(expectedPolicy, 'FullAccessRoleEC2 role does not have FullAccessPolicyEC2 policy').to.equal(actualPolicy);
    })

    it("Verify that FullAccessRoleS3 role has the FullAccessPolicyS3 policy", async function () {
        const actualPolicy = await getPolicyByRole('FullAccessRoleS3');
        const expectedPolicy = expectedConfig.rolesAndPolicies.FullAccessRoleS3;
        expect(expectedPolicy, 'FullAccessRoleS3 role does not have the FullAccessPolicyS3 policy').to.equal(actualPolicy);
    })

    it("Verify that ReadAccessRoleS3 role has the ReadAccessPolicyS3 policy", async function () {
        const actualPolicy = await getPolicyByRole('ReadAccessRoleS3');
        const expectedPolicy = expectedConfig.rolesAndPolicies.ReadAccessRoleS3;
        expect(expectedPolicy, 'ReadAccessRoleS3 role does not have the ReadAccessPolicyS3 policy').to.equal(actualPolicy);
    })

    })

    describe('CXQA-IAM-03 Group and Polices', () => {
        it('Verify that FullAccessGroupEC2 group has the FullAccessPolicyEC2 policy', async function (){
            const actualPolicy = await getPolicyByGroupName('FullAccessGroupEC2');
            const expectedPolicy = expectedConfig.groupsAndPolicies.FullAccessGroupEC2;
            expect(expectedPolicy, 'FullAccessGroupEC2 group does not have the FullAccessPolicyEC2 policy').to.equal(actualPolicy);
        })

        it('Verify that FullAccessGroupS3 group has the FullAccessPolicyS3 policy', async function (){
            const actualPolicy = await getPolicyByGroupName('FullAccessGroupS3');
            const expectedPolicy = expectedConfig.groupsAndPolicies.FullAccessGroupS3;
            expect(expectedPolicy, 'FullAccessGroupS3 group does not have the FullAccessPolicyS3 policy').to.equal(actualPolicy);
        })

        it('Verify that ReadAccessGroupS3 group has the ReadAccessPolicyS3 policy', async function (){
            const actualPolicy = await getPolicyByGroupName('ReadAccessGroupS3');
            const expectedPolicy = expectedConfig.groupsAndPolicies.ReadAccessGroupS3;
            expect(expectedPolicy,'ReadAccessGroupS3 group does not have the ReadAccessPolicyS3 policy').to.equal(actualPolicy);
        })
    })

    describe('CXQA-IAM-04 Users and Groups', () => {
        it('Verify that FullAccessUserEC2 user has the FullAccessGroupEC2 group', async function (){
            const actualPolicy = await getGroupByUserName('FullAccessUserEC2');
            const expectedPolicy = expectedConfig.usersAndGroups.FullAccessUserEC2;
            expect(expectedPolicy, 'FullAccessUserEC2 user does not have the FullAccessGroupEC2 group').to.equal(actualPolicy);
        })

        it('Verify that FullAccessUserS3 user has the FullAccessGroupS3 group', async function (){
            const actualPolicy = await getGroupByUserName('FullAccessUserS3');
            const expectedPolicy = expectedConfig.usersAndGroups.FullAccessUserS3;
            expect(expectedPolicy, 'FullAccessUserS3 user does not have the FullAccessGroupS3 group').to.equal(actualPolicy);
        })

        it('Verify that ReadAccessUserS3 user has the ReadAccessGroupS3 group', async function (){
            const actualPolicy = await getGroupByUserName('ReadAccessUserS3');
            const expectedPolicy = expectedConfig.usersAndGroups.ReadAccessUserS3;
            expect(expectedPolicy, 'ReadAccessUserS3 user does not have the ReadAccessGroupS3 group').to.equal(actualPolicy);
        })
    })
})