import * as fromRoom from './room.actions';

describe('loadRooms', () => {
  it('should return an action', () => {
    expect(fromRoom.loadRooms().type).toBe('[Room] Load Rooms');
  });
});
