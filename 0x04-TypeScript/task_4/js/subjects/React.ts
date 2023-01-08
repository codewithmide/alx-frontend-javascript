/// <reference path="Teacher.ts" />
namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }

    export class React extends Subject {

        getRequirements(): string {
            return 'Here is the list of requirements for React';
        }

        getAvailableTeacher(): string {
            const teachingExpReact = this.teacher.experienceTeachingReact;
            if (typeof teachingExpReact === 'number' && teachingExpReact > 0) {
                return `Available teacher ${this.teacher.firstName}`
            } else {
                return 'No available teacher';
            }
        }
    }
}