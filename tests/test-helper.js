import Application from 'emberjs-project/app';
import config from 'emberjs-project/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
