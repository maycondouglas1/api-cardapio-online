import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('CategoriesController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    jest.setTimeout(12000);
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/category (GET) should return all categories', () => {
    return request(app.getHttpServer())
      .get('/category')
      .expect(200)
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(response.body).toEqual(expect.any(Array));
      });
  });
});
