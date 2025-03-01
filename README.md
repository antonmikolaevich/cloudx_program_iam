Hometask 2 - IAM

## Pre-condition
Deploy the IAM application

1. Deploy the **cloudxiam** CDK stack: [deployment instructions](../../applications/docs/cloudxiam.md).

## Main Task

Create the TAF and implemented DDT approach using AWS SDK to validate the follwoing requirements below:

1. CXQA-IAM-01 Policies and Versions
> | Policy              | Actions Allowed                       | Resources | Effect  |
> |:--------------------|:--------------------------------------|:----------|:--------|
> | FullAccessPolicyEC2 | `ec2:*`                               | All       | `Allow` |
> | FullAccessPolicyS3  | `s3:*`                                | All       | `Allow` |
> | ReadAccessPolicyS3  | `s3:Describe*`, `s3:Get*`, `s3:List*` | All       | `Allow` |

2. CXQA-IAM-02 Roles and Polices
> | Role              | Policies            |
> |:------------------|:--------------------|
> | FullAccessRoleEC2 | FullAccessPolicyEC2 |
> | FullAccessRoleS3  | FullAccessPolicyS3  |
> | ReadAccessRoleS3  | ReadAccessPolicyS3  |

3. CXQA-IAM-03 Group and Polices
> | Group              | Policies            |
> |:-------------------|:--------------------|
> | FullAccessGroupEC2 | FullAccessPolicyEC2 |
> | FullAccessGroupS3  | FullAccessPolicyS3  |
> | ReadAccessGroupS3  | ReadAccessPolicyS3  | 

4. CXQA-IAM-04 Users and Groups
> | User              | Group              |
> |:------------------|:-------------------|
> | FullAccessUserEC2 | FullAccessGroupEC2 |
> | FullAccessUserS3  | FullAccessGroupS3  |
> | ReadAccessUserS3  | ReadAccessGroupS3  |