import { date, random } from 'faker';
import { Project } from 'server/data/models';
import { dateToUTC } from 'server/src/utils/functions';
import { buildUser, createUser } from './user.factory';

const buildProject = async (projectFks) => {
  const resProject = {};
  let { creator } = projectFks;

  resProject.projectName = random.word().slice(0, 30);
  resProject.creation = dateToUTC(date.past()).format('YYYY-MM-DDTHH:mm:ss[.000Z]');

  if (projectFks.creator === null || typeof projectFks.creator === 'undefined') {
    const fakeCreator = await buildUser({});
    const createdFakeCreator = await createUser(fakeCreator);
    creator = createdFakeCreator.id;
  }
  resProject.creator = creator;

  return resProject;
};

const createProject = async (fakeProject) => {
  const project = await Project.create(fakeProject);
  return project;
};

export { buildProject, createProject };
