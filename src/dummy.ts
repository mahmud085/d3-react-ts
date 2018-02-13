export default {
  nodes: [
    {
      name: "/meca500/follow_joint_trajectory/goal",
      dataType: "control_msgs/FollowJointTrajectoryActionGoal"
    },
    {
      name: "/move_group/sense_for_plan/parameter_updates",
      dataType: "dynamic_reconfigure/Config"
    },
    {
      name: "/move_group/planning_scene_monitor/parameter_updates",
      dataType: "dynamic_reconfigure/Config"
    },
    {
      name: "/pickup/result",
      dataType: "moveit_msgs/PickupActionResult"
    },
    {
      name: "/place/result",
      dataType: "moveit_msgs/PlaceActionResult"
    },
    {
      name: "/rosout_agg",
      dataType: "rosgraph_msgs/Log"
    },
    {
      name: "/move_group/trajectory_execution/parameter_descriptions",
      dataType: "dynamic_reconfigure/ConfigDescription"
    },
    {
      name: "/move_group/ompl/parameter_descriptions",
      dataType: "dynamic_reconfigure/ConfigDescription"
    },
    {
      name: "/move_group/display_planned_path",
      dataType: "moveit_msgs/DisplayTrajectory"
    },
    {
      name: "/move_group/status",
      dataType: "actionlib_msgs/GoalStatusArray"
    },
    {
      name: "/planning_scene_world",
      dataType: "moveit_msgs/PlanningSceneWorld"
    },
    {
      name: "/pickup/status",
      dataType: "actionlib_msgs/GoalStatusArray"
    },
    {
      name: "/xamlaMoveGroupServices/heartbeat",
      dataType: "xamla_sysmon_msgs/HeartBeat"
    },
    {
      name: "/move_group/trajectory_execution/parameter_updates",
      dataType: "dynamic_reconfigure/Config"
    },
    {
      name: "/execute_trajectory/result",
      dataType: "moveit_msgs/ExecuteTrajectoryActionResult"
    },
    {
      name: "/tf_static",
      dataType: "tf2_msgs/TFMessage"
    },
    {
      name: "/move_group/monitored_planning_scene",
      dataType: "moveit_msgs/PlanningScene"
    },
    {
      name: "/move_group/ompl/parameter_updates",
      dataType: "dynamic_reconfigure/Config"
    },
    {
      name: "/xamlaJointJogging/jogging_command",
      dataType: "trajectory_msgs/JointTrajectory"
    },
    {
      name: "/meca500/follow_joint_trajectory/cancel",
      dataType: "actionlib_msgs/GoalID"
    },
    {
      name: "/pickup/feedback",
      dataType: "moveit_msgs/PickupActionFeedback"
    },
    {
      name: "/xamlaResourceLockService/heartbeat",
      dataType: "xamla_sysmon_msgs/HeartBeat"
    },
    {
      name: "/xamlaJointJogging/jogging_twist",
      dataType: "geometry_msgs/TwistStamped"
    },
    {
      name: "/place/status",
      dataType: "actionlib_msgs/GoalStatusArray"
    },
    {
      name: "/move_group/feedback",
      dataType: "moveit_msgs/MoveGroupActionFeedback"
    },
    {
      name: "/joint_states",
      dataType: "sensor_msgs/JointState"
    },
    {
      name: "/rosout",
      dataType: "rosgraph_msgs/Log"
    },
    {
      name: "/place/feedback",
      dataType: "moveit_msgs/PlaceActionFeedback"
    },
    {
      name: "/move_group/plan_execution/parameter_descriptions",
      dataType: "dynamic_reconfigure/ConfigDescription"
    },
    {
      name: "/execute_trajectory/feedback",
      dataType: "moveit_msgs/ExecuteTrajectoryActionFeedback"
    },
    {
      name: "/tf",
      dataType: "tf2_msgs/TFMessage"
    },
    {
      name: "/move_group/result",
      dataType: "moveit_msgs/MoveGroupActionResult"
    },
    {
      name: "/execute_trajectory/status",
      dataType: "actionlib_msgs/GoalStatusArray"
    },
    {
      name: "/meca500/follow_joint_trajectory/status",
      dataType: "actionlib_msgs/GoalStatusArray"
    },
    {
      name: "/move_group/sense_for_plan/parameter_descriptions",
      dataType: "dynamic_reconfigure/ConfigDescription"
    },
    {
      name: "/xamlaPlanningServices/heartbeat",
      dataType: "xamla_sysmon_msgs/HeartBeat"
    },
    {
      name: "/move_group/plan_execution/parameter_updates",
      dataType: "dynamic_reconfigure/Config"
    },
    {
      name: "/meca500/follow_joint_trajectory/result",
      dataType: "control_msgs/FollowJointTrajectoryActionResult"
    },
    {
      name: "/move_group/planning_scene_monitor/parameter_descriptions",
      dataType: "dynamic_reconfigure/ConfigDescription"
    },
    {
      name: "/meca500/follow_joint_trajectory/feedback",
      dataType: "control_msgs/FollowJointTrajectoryActionFeedback"
    },
    {
      name: "/xamlaJointJogging/jogging_setpoint",
      dataType: "geometry_msgs/PoseStamped"
    },
    {
      name: "/xamlaMoveActions/heartbeat",
      dataType: "xamla_sysmon_msgs/HeartBeat"
    },
    {
      name: "/planning_scene",
      dataType: "moveit_msgs/PlanningScene"
    },
    {
      name: "/move_group/display_contacts",
      dataType: "visualization_msgs/MarkerArray"
    },
    {
      name: "/xamla_sysmon/system_status",
      dataType: "xamla_sysmon_msgs/SystemStatus"
    }
  ],
  links: []
};
