require 'test_helper'

class Api::DepartmentControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_department_index_url
    assert_response :success
  end

  test "should get show" do
    get api_department_show_url
    assert_response :success
  end

  test "should get create" do
    get api_department_create_url
    assert_response :success
  end

  test "should get update" do
    get api_department_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_department_destroy_url
    assert_response :success
  end

end
