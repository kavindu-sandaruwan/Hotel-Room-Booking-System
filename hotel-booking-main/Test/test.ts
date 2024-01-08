import { describe, it, before, after } from 'mocha';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {
  newBooking,
  checkRoomIsAvailble,
  myBookings,
  getBookedDates,
  deleteBooking,
} from '../backend/controllers/bookingController';

import Booking, { IBooking } from '../backend/models/Booking';

import {
  getAll,
  searchRooms,
  getSingle,
  addRoom,
  updateRoom,
  deleteRoom,
  createRoomReview,
} from '../backend/controllers/roomController';

import Room from '../backend/models/Room';

import {
  register,
  login,
  updateProfile,
  updatePassword,
  getSingleUser,
  updateUser,
  deleteUser,
} from '../backend/controllers/userController';

import User from '../backend/models/User';


describe('Booking Controller', () => {
  let sandbox: sinon.SinonSandbox;

  before(() => {
    sandbox = sinon.createSandbox();
  });

  after(() => {
    sandbox.restore();
  });

  it('should create a new booking', async () => {
    const req: any = {
      body: {
        room: 'Test Room',
        checkInDate: '2024-01-10',
        checkOutDate: '2024-01-15',
        amountPaid: 100,
        daysOfStay: 5,
        paymentInfo: 'Test Payment Info',
      },
      user: { _id: 'user123' }, // Mock user data
    };

    const res: any = {
      status: function (statusCode: number) {
        assert.strictEqual(statusCode, 201);
        return this;
      },
      json: function (data: any) {
        assert.strictEqual(data.room, 'Test Room');
        // Add more assertions based on the expected response
      },
    };

    const bookingCreateStub = sandbox.stub(Booking, 'create').resolves({
      room: 'Test Room',
    });

    await newBooking(req, res);

    assert(bookingCreateStub.calledOnce);
  });

  it('should check room availability', async () => {
    const req: any = {
      body: {
        roomId: 'room123',
        checkInDate: '2024-01-20',
        checkOutDate: '2024-01-25',
      },
    };

    const res: any = {
      status: function (statusCode: number) {
        assert.strictEqual(statusCode, 201);
        return this;
      },
      json: function (data: any) {
        assert.strictEqual(data.roomAvailable, true);
        // Add more assertions based on the expected response
      },
    };

    const bookingFindStub = sandbox.stub(Booking, 'find').resolves([]);

    await checkRoomIsAvailble(req, res);

    assert(bookingFindStub.calledOnce);
  });

  it('should get all bookings for the current user', async () => {
    const req: any = {
      user: { _id: 'user123' }, // Mock user data
    };

    const res: any = {
      status: function (statusCode: number) {
        assert.strictEqual(statusCode, 201);
        return this;
      },
      json: function (data: any) {
        // Add assertions based on the expected response
      },
    };

    const bookingFindStub = sandbox.stub(Booking, 'find').resolves([]);

    await myBookings(req, res);

    assert(bookingFindStub.calledOnce);
  });

  it('should get booked dates for a room', async () => {
    const req: any = {
      params: { roomId: 'room123' },
    };

    const res: any = {
      status: function (statusCode: number) {
        assert.strictEqual(statusCode, 200);
        return this;
      },
      json: function (data: any) {
        // Add assertions based on the expected response
      },
    };

    const bookingFindStub = sandbox.stub(Booking, 'find').resolves([]);

    await getBookedDates(req, res);

    assert(bookingFindStub.calledOnce);
  });

  it('should get all bookings', async () => {
    const req: any = {
      query: { pageNumber: 1 },
    };

    const res: any = {
      status: function (statusCode: number) {
        assert.strictEqual(statusCode, 201);
        return this;
      },
      json: function (data: any) {
        // Add assertions based on the expected response
      },
    };

    const bookingCountStub = sandbox.stub(Booking, 'countDocuments').resolves(0);
    const bookingFindStub = sandbox.stub(Booking, 'find').resolves([]);

    await getAll(req, res);

    assert(bookingCountStub.calledOnce);
    assert(bookingFindStub.calledOnce);
  });

  it('should delete a booking', async () => {
    const req: any = {
      params: { id: 'booking123' },
    };

    const res: any = {
      status: function (statusCode: number) {
        assert.strictEqual(statusCode, 201);
        return this;
      },
      json: function (data: any) {
        // Add assertions based on the expected response
      },
    };

    const bookingFindStub = sandbox.stub(Booking, 'findById').resolves({ _id: 'booking123' });
    const bookingDeleteStub = sandbox.stub(Booking, 'findByIdAndDelete');

    await deleteBooking(req, res);

    assert(bookingFindStub.calledOnce);
    assert(bookingDeleteStub.calledOnce);
  });
});

describe('Room Controller', () => {
  let sandbox: sinon.SinonSandbox;

  before(() => {
    sandbox = sinon.createSandbox();
  });

  after(() => {
    sandbox.restore();
  });

  it('should get all rooms', async () => {
    const req: any = {
      query: {},
    };

    const res: any = {
      status: function (statusCode: number) {
        assert.strictEqual(statusCode, 201);
        return this;
      },
      json: function (data: any) {
        assert.strictEqual(data.rooms.length, 0); // Adjust based on your expected data
      },
    };

    const roomCountStub = sandbox.stub(Room, 'countDocuments').resolves(0);
    const roomFindStub = sandbox.stub(Room, 'find').resolves([]);

    await getAll(req, res);

    assert(roomCountStub.calledOnce);
    assert(roomFindStub.calledOnce);
  });

  it('should search rooms', async () => {
    const req: any = {
      query: {
        keyword: 'test',
        numOfBeds: 2,
        roomType: 'Single',
      },
    };

    const res: any = {
      status: function (statusCode: number) {
        assert.strictEqual(statusCode, 201);
        return this;
      },
      json: function (data: any) {
        // Add assertions based on the expected response
      },
    };

    const roomFindStub = sandbox.stub(Room, 'find').resolves([]);

    await searchRooms(req, res);

    assert(roomFindStub.calledOnce);
  });

  it('should get a single room', async () => {
    const req: any = {
      params: {
        id: 'room123',
      },
    };

    const res: any = {
      status: function (statusCode: number) {
        assert.strictEqual(statusCode, 201);
        return this;
      },
      json: function (data: any) {
        // Add assertions based on the expected response
      },
    };

    const roomFindStub = sandbox.stub(Room, 'findById').resolves({ _id: 'room123' });

    await getSingle(req, res);

    assert(roomFindStub.calledOnce);
  });

  it('should add a new room', async () => {
    const req: any = {
      body: {
        name: 'Test Room',
        numOfBeds: 2,
        category: 'Single',
        // Add other required fields
      },
      user: { _id: 'user123' },
    };

    const res: any = {
      status: function (statusCode: number) {
        assert.strictEqual(statusCode, 201);
        return this;
      },
      json: function (data: any) {
        // Add assertions based on the expected response
      },
    };

    const roomCreateStub = sandbox.stub(Room, 'create').resolves({
      name: 'Test Room',
    });

    await addRoom(req, res);

    assert(roomCreateStub.calledOnce);
  });

  it('should update a room', async () => {
    const req: any = {
      params: {
        id: 'room123',
      },
      body: {
        name: 'Updated Room',
        // Add other fields to update
      },
      user: { _id: 'user123' },
    };

    const res: any = {
      status: function (statusCode: number) {
        assert.strictEqual(statusCode, 201);
        return this;
      },
      json: function (data: any) {
        // Add assertions based on the expected response
      },
    };

    const roomFindStub = sandbox.stub(Room, 'findById').resolves({ _id: 'room123' });
    const roomUpdateStub = sandbox.stub(Room, 'findByIdAndUpdate').resolves({
      name: 'Updated Room',
    });

    await updateRoom(req, res);

    assert(roomFindStub.calledOnce);
    assert(roomUpdateStub.calledOnce);
  });

  it('should delete a room', async () => {
    const req: any = {
      params: {
        id: 'room123',
      },
      user: { _id: 'user123' },
    };

    const res: any = {
      status: function (statusCode: number) {
        assert.strictEqual(statusCode, 201);
        return this;
      },
      json: function (data: any) {
        // Add assertions based on the expected response
      },
    };

    const roomFindStub = sandbox.stub(Room, 'findById').resolves({ _id: 'room123' });
    const roomDeleteStub = sandbox.stub(Room, 'findByIdAndDelete');

    await deleteRoom(req, res);

    assert(roomFindStub.calledOnce);
    assert(roomDeleteStub.calledOnce);
  });

  it('should create a room review', async () => {
    const req: any = {
      params: {
        id: 'room123',
      },
      user: { _id: 'user123', name: 'Test User' },
      body: {
        rating: 5,
        comment: 'Great room!',
      },
    };

    const res: any = {
      status: function (statusCode: number) {
        assert.strictEqual(statusCode, 201);
        return this;
      },
      json: function (data: any) {
        // Add assertions based on the expected response
      },
    };

    const roomFindStub = sandbox.stub(Room, 'findById').resolves({ _id: 'room123', reviews: [] });
    const roomSaveStub = sandbox.stub(Room.prototype, 'save');

    await createRoomReview(req, res);

    assert(roomFindStub.calledOnce);
    assert(roomSaveStub.calledOnce);
  });
});

describe('User Controller', () => {
  let sandbox: sinon.SinonSandbox;

  before(() => {
    sandbox = sinon.createSandbox();
  });

  after(() => {
    sandbox.restore();
  });

  it('should register a new user', async () => {
    const req: any = {
      body: {
        name: 'Test User',
        email: 'test@example.com',
        password: 'testpassword',
        avatar: 'avatar.jpg',
      },
    };

    const res: any = {
      status: function (statusCode: number) {
        assert.strictEqual(statusCode, 201);
        return this;
      },
      json: function (data: any) {
        // Add assertions based on the expected response
      },
    };

    const userCreateStub = sandbox.stub(User.prototype, 'save').resolves({
      _id: 'user123',
      name: 'Test User',
      email: 'test@example.com',
      avatar: 'avatar.jpg',
      isAdmin: false,
    });

    await register(req, res);

    assert(userCreateStub.calledOnce);
  });

  it('should login a user', async () => {
    const req: any = {
      body: {
        email: 'test@example.com',
        password: 'testpassword',
      },
    };

    const res: any = {
      status: function (statusCode: number) {
        assert.strictEqual(statusCode, 201);
        return this;
      },
      json: function (data: any) {
        // Add assertions based on the expected response
      },
    };

    const userFindOneStub = sandbox.stub(User, 'findOne').resolves({
      _id: 'user123',
      name: 'Test User',
      email: 'test@example.com',
      avatar: 'avatar.jpg',
      isAdmin: false,
      comparePassword: async () => true,
    });

    await login(req, res);

    assert(userFindOneStub.calledOnce);
  });

  it('should update user profile', async () => {
    const req: any = {
      user: { id: 'user123' },
      body: {
        name: 'Updated User',
        email: 'updated@example.com',
        avatar: 'updated-avatar.jpg',
      },
    };

    const res: any = {
      status: function (statusCode: number) {
        assert.strictEqual(statusCode, 201);
        return this;
      },
      json: function (data: any) {
        // Add assertions based on the expected response
      },
    };

    const userFindStub = sandbox.stub(User, 'findById').resolves({
      _id: 'user123',
      name: 'Test User',
      email: 'test@example.com',
      avatar: 'avatar.jpg',
      isAdmin: false,
    });
    const userUpdateStub = sandbox.stub(User, 'findByIdAndUpdate').resolves({
      _id: 'user123',
      name: 'Updated User',
      email: 'updated@example.com',
      avatar: 'updated-avatar.jpg',
      isAdmin: false,
    });

    await updateProfile(req, res);

    assert(userFindStub.calledOnce);
    assert(userUpdateStub.calledOnce);
  });

  it('should update user password', async () => {
    const req: any = {
      user: { id: 'user123' },
      body: {
        oldPassword: 'testpassword',
        newPassword: 'newtestpassword',
      },
    };

    const res: any = {
      status: function (statusCode: number) {
        assert.strictEqual(statusCode, 201);
        return this;
      },
      json: function (data: any) {
        // Add assertions based on the expected response
      },
    };

    const userFindStub = sandbox.stub(User, 'findById').resolves({
      _id: 'user123',
      comparePassword: async () => true,
    });
    const userUpdateStub = sandbox.stub(User, 'findByIdAndUpdate').resolves({
      _id: 'user123',
      name: 'Test User',
      email: 'test@example.com',
      avatar: 'avatar.jpg',
      isAdmin: false,
    });

    await updatePassword(req, res);

    assert(userFindStub.calledOnce);
    assert(userUpdateStub.calledOnce);
  });

  it('should get all users', async () => {
    const req: any = {
      query: {},
    };

    const res: any = {
      status: function (statusCode: number) {
        assert.strictEqual(statusCode, 201);
        return this;
      },
      json: function (data: any) {
        // Add assertions based on the expected response
      },
    };

    const userCountStub = sandbox.stub(User, 'countDocuments').resolves(0);
    const userFindStub = sandbox.stub(User, 'find').resolves([]);

    await getAll(req, res);

    assert(userCountStub.calledOnce);
    assert(userFindStub.calledOnce);
  });

  it('should get a single user by ID', async () => {
    const req: any = {
      params: { id: 'user123' },
    };

    const res: any = {
      status: function (statusCode: number) {
        assert.strictEqual(statusCode, 201);
        return this;
      },
      json: function (data: any) {
        // Add assertions based on the expected response
      },
    };

    const userFindStub = sandbox.stub(User, 'findById').resolves({
      _id: 'user123',
      name: 'Test User',
      email: 'test@example.com',
      avatar: 'avatar.jpg',
      isAdmin: false,
    });

    await getSingleUser(req, res);

    assert(userFindStub.calledOnce);
  });

  it('should update a user by ID', async () => {
    const req: any = {
      params: { id: 'user123' },
      body: {
        name: 'Updated User',
        email: 'updated@example.com',
        avatar: 'updated-avatar.jpg',
        isAdmin: true,
      },
    };

    const res: any = {
      status: function (statusCode: number) {
        assert.strictEqual(statusCode, 201);
        return this;
      },
      json: function (data: any) {
        // Add assertions based on the expected response
      },
    };

    const userFindStub = sandbox.stub(User, 'findById').resolves({
      _id: 'user123',
      name: 'Test User',
      email: 'test@example.com',
      avatar: 'avatar.jpg',
      isAdmin: false,
    });
    const userUpdateStub = sandbox.stub(User, 'findByIdAndUpdate').resolves({
      _id: 'user123',
      name: 'Updated User',
      email: 'updated@example.com',
      avatar: 'updated-avatar.jpg',
      isAdmin: true,
    });

    await updateUser(req, res);

    assert(userFindStub.calledOnce);
    assert(userUpdateStub.calledOnce);
  });

  it('should delete a user by ID', async () => {
    const req: any = {
      params: { id: 'user123' },
    };

    const res: any = {
      status: function (statusCode: number) {
        assert.strictEqual(statusCode, 201);
        return this;
      },
      json: function (data: any) {
        // Add assertions based on the expected response
      },
    };

    const userFindStub = sandbox.stub(User, 'findById').resolves({
      _id: 'user123',
      name: 'Test User',
      email: 'test@example.com',
      avatar: 'avatar.jpg',
      isAdmin: false,
    });
    const userDeleteStub = sandbox.stub(User, 'findByIdAndDelete');

    await deleteUser(req, res);

    assert(userFindStub.calledOnce);
    assert(userDeleteStub.calledOnce);
  });
});